import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const root = path.resolve(import.meta.dirname, "..", "..");
const read = (...parts: string[]) => fs.readFileSync(path.join(root, ...parts), "utf8");

describe("admin website submissions", () => {
  it("keeps saved website and SMS preference data behind the existing admin session", () => {
    const adminLayout = read("client", "src", "pages", "admin", "AdminLayout.tsx");
    const list = read("client", "src", "pages", "admin", "SubmissionList.tsx");
    const router = read("server", "routers", "blogRouter.ts");

    expect(adminLayout).toContain("Website Submissions");
    expect(adminLayout).toContain('href: "~/admin/blog/submissions"');
    expect(adminLayout).toContain("<SubmissionList />");
    expect(list).toContain("trpc.blog.submissions.list.useQuery");
    expect(list).toContain("SMS communication choices are displayed exactly as submitted");
    expect(list).toContain("shown as not selected");
    expect(list).toContain("does not authorize text messages");
    expect(list).toContain("Refresh");
    expect(router).toContain("submissions: router");
    expect(router).toContain("requireAdmin(ctx)");
    expect(router).toContain("getContactSubmissions(input?.limit ?? 250)");
  });
});
