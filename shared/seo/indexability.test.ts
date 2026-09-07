import { describe, expect, it } from "vitest";
import { isNoindexPath } from "./indexability";

describe("shared indexability policy", () => {
  it("keeps explicit and prefix-based review routes out of search indexing", () => {
    expect(isNoindexPath("/pricing-legacy")).toBe(true);
    expect(isNoindexPath("/features/secure-route")).toBe(true);
    expect(isNoindexPath("/integrations/oura-ring")).toBe(true);
    expect(isNoindexPath("/compare/noonlight-vs-mysentry")).toBe(true);
    expect(isNoindexPath("/case-studies/home-healthcare")).toBe(true);
    expect(isNoindexPath("/admin")).toBe(true);
    expect(isNoindexPath("/admin/users")).toBe(true);
  });

  it("leaves canonical public pages indexable", () => {
    expect(isNoindexPath("/")).toBe(false);
    expect(isNoindexPath("/compare")).toBe(false);
    expect(isNoindexPath("/industries/home-healthcare")).toBe(false);
    expect(isNoindexPath("/industries/real-estate")).toBe(false);
    expect(isNoindexPath("/guides/lone-worker-safety")).toBe(false);
  });
});
