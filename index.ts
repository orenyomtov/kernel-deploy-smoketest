import { Kernel, type KernelContext } from "@onkernel/sdk";

const kernel = new Kernel();
const app = kernel.app("deploy-smoketest");

app.action("ping", async (_ctx: KernelContext) => ({ ok: true }));

export {};
