import { Kernel, type KernelContext } from "@onkernel/sdk";

const kernel = new Kernel();
const app = kernel.app('gd203-sub');

app.action("ping", async (_ctx: KernelContext) => {
  const env: Record<string, string> = {};
  for (const [k, v] of Object.entries(process.env)) {
    if (k.startsWith("KERNEL_") && !/KEY|TOKEN|SECRET/.test(k)) env[k] = String(v);
  }
  return { marker: 'GD203SUB', app: 'gd203-sub', env };
});

export {};
