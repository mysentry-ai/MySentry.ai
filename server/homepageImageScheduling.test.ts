import fs from "node:fs";
import vm from "node:vm";
import { describe, expect, it } from "vitest";

const html = fs.readFileSync("client/public/mysentry-homepage-v17.html", "utf8");
const script = html.split('<script id="homepage-deferred-images">')[1].split("</script>")[0];
const tick = async () => { for (let n = 0; n < 12; n++) await Promise.resolve(); };
function harness() {
  const requests: string[] = [], idle: Function[] = [], observers: any[] = [], mutations: Function[] = [];
  const image = (n: number) => {
    let finish!: () => void;
    const promise = new Promise<void>(r => { finish = r; });
    let src = "placeholder";
    const img: any = { dataset: { deferredSrc: `/art-${n}.webp`, scene: String(n) }, matches: () => true, decode: () => promise,
      get src() { return src; }, set src(v: string) { src = v; requests.push(v); } };
    return { img, finish };
  };
  const pictures = [image(0), image(1), image(2)]; let active = pictures[0].img;
  let top = 1900, criticalDone!: () => void;
  const critical = new Promise<void>(r => { criticalDone = r; });
  const area = { getBoundingClientRect: () => ({ top, bottom: top + 4000 }),
    querySelector: (s: string) => s === '.scene-art.active' ? active : s.startsWith('img.scene-art') ? pictures[Number(s.match(/scene="(\d+)"/)?.[1])]?.img ?? null : null,
    querySelectorAll: () => pictures.map(x => x.img) };
  const document: any = { hidden: false, getElementById: (s: string) => s === "how" ? area : null,
    querySelectorAll: () => [{ decode: () => critical }] };
  const navigator: any = { connection: { saveData: false } };
  const IO = class { constructor(public fn: Function) { observers.push(this); } observe() {} };
  const MO = class { constructor(fn: Function) { mutations.push(fn); } observe() {} };
  vm.runInNewContext(script, { document, navigator, innerHeight: 844,
    window: { IntersectionObserver: IO, MutationObserver: MO, requestIdleCallback: true },
    IntersectionObserver: IO, MutationObserver: MO, requestIdleCallback: (fn: Function) => idle.push(fn), setTimeout: (fn: Function) => idle.push(fn) });
  return { requests, pictures, idle, navigator, criticalDone, document,
    move: (n: number) => { top = n; }, activate: (n: number) => { active = pictures[n].img; mutations.forEach(f => f()); },
    warm: () => observers[0].fn([{ isIntersecting: true, target: area }]),
    runIdle: () => { idle.splice(0).forEach(f => f()); } };
}

describe("homepage visible-art scheduling", () => {
  it("does not fetch the audience/story artwork at initial below-fold positions", () => {
    const h = harness(); h.warm(); expect(h.requests).toEqual([]);
  });
  it("reuses the real pending decode on repeated mutations and waits for critical images", async () => {
    const h = harness(); h.move(200); h.warm(); h.activate(0); h.warm(); await tick();
    expect(h.requests).toEqual(['/art-0.webp']); expect(h.idle).toHaveLength(0);
    h.pictures[0].finish(); await tick(); expect(h.idle).toHaveLength(0);
    h.criticalDone(); await tick(); expect(h.idle).toHaveLength(1); h.runIdle();
    expect(h.requests).toEqual(['/art-0.webp', '/art-1.webp']); expect(h.pictures[1].img.fetchPriority).toBe('low');
  });
  it("loads a newly selected scene immediately without waiting for an old scene", async () => {
    const h = harness(); h.move(200); h.warm(); h.activate(2);
    expect(h.requests).toEqual(['/art-0.webp', '/art-2.webp']);
    h.criticalDone(); h.pictures[0].finish(); await tick(); h.runIdle();
    expect(h.requests).not.toContain('/art-1.webp');
    expect(h.pictures[2].img.fetchPriority).toBe('high');
  });
  it("never warms a neighbor before actual panel entry or when save-data is enabled", async () => {
    for (const saveData of [false, true]) {
      const h = harness(); h.move(saveData ? 200 : 1100); h.navigator.connection.saveData = saveData;
      h.warm(); h.pictures[0].finish(); h.criticalDone(); await tick(); h.runIdle();
      expect(h.requests).toEqual(['/art-0.webp']);
    }
  });
  it("rechecks current selection and background visibility at the idle callback", async () => {
    const h = harness(); h.move(200); h.warm(); h.pictures[0].finish(); h.criticalDone(); await tick();
    h.document.hidden = true; h.runIdle(); expect(h.requests).toEqual(['/art-0.webp']);
  });
});
