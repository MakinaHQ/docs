import type { PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { vocs } from "vocs/vite";

// Recursively await and flatten Vite's nested/async plugin option tree.
async function resolvePlugins(items: PluginOption[]): Promise<PluginOption[]> {
  const out: PluginOption[] = [];
  for (const entry of items) {
    const resolved = await entry;
    if (Array.isArray(resolved)) out.push(...(await resolvePlugins(resolved)));
    else if (resolved) out.push(resolved);
  }
  return out;
}

// to fix: https://github.com/wevm/vocs/issues/450
// not needed once fixed
export default defineConfig(async () => {
  // Vocs' llms.txt generator (`vocs:llms`) parses every page with remark-mdx but
  // WITHOUT remark-math, so it crashes on the KaTeX `$$...$$` blocks in the
  // accounting pages, and it offers no per-page opt-out. Drop just that plugin;
  // math (and everything else) still renders normally in the site.
  const resolved = await resolvePlugins(await vocs({}));
  const plugins = resolved.filter(
    (plugin) =>
      !(
        plugin &&
        typeof plugin === "object" &&
        "name" in plugin &&
        plugin.name === "vocs:llms"
      ),
  );
  return {
    plugins: [react(), ...plugins],
    // Mermaid is loaded via a dynamic import in Vocs' client component. Its
    // transitive `dayjs` dependency ships as UMD, which Vite's dev optimizer
    // otherwise serves without a `default` export ("does not provide an export
    // named 'default'"), breaking diagram rendering. Pre-bundling them fixes the
    // CJS->ESM interop.
    optimizeDeps: { include: ["mermaid", "dayjs"] },
  };
});
