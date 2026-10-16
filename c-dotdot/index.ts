import { Kernel, type KernelContext } from "@onkernel/sdk";
import { writeFileSync, readFileSync } from "node:fs";

const kernel = new Kernel();
const app = kernel.app('../gd203canary');

app.action("ping", async (_ctx: KernelContext) => {
  let canary = "write-failed";
  try { writeFileSync("/tmp/gd203-canary.txt", 'GD203DOTDOT-CANARY'); canary = readFileSync("/tmp/gd203-canary.txt", "utf8"); } catch (e) { canary = "err:" + String(e).slice(0, 120); }
  return { marker: 'GD203DOTDOT', app: '../gd203canary', cwd: process.cwd(), canary };
});

export {};
