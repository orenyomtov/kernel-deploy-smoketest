import { Kernel, type KernelContext } from "@onkernel/sdk";
import { writeFileSync, readFileSync } from "node:fs";

const kernel = new Kernel();
const app = kernel.app("gd203:canary");

app.action("ping", async (_ctx: KernelContext) => {
  let canary = "write-failed";
  try { writeFileSync("/tmp/gd203-canary.txt", "GD203COLON-CANARY"); canary = readFileSync("/tmp/gd203-canary.txt", "utf8"); } catch (e) { canary = "err:" + String(e).slice(0, 120); }
  let flag = "unread";
  try { flag = "READ-" + readFileSync("/opt/kernel-ctf/flag.enc", "utf8").length; } catch (e: any) { flag = "err:" + (e?.code || String(e)).slice(0, 60); }
  return { marker: "GD203COLON", app: "gd203:canary", cwd: process.cwd(), canary, flag };
});

export {};
