import katex from "katex";
import { fromHtml } from "hast-util-from-html";
import { visit } from "unist-util-visit";

/**
 * Renders `remark-math` nodes to KaTeX markup during the remark (mdast) stage.
 *
 * Why not the usual `rehype-katex`? Vocs appends user rehype plugins *after* its
 * own `rehypeShiki`. `remark-math` emits display math as `<code class="language-math">`,
 * which Shiki grabs and highlights as a (non-existent) "math" language before
 * `rehype-katex` ever runs, so the formula renders as a code block. Rendering
 * here, before any rehype runs, sidesteps the ordering problem entirely: Shiki
 * only ever sees a `<div class="math math-display">` it ignores.
 *
 * Use after `remarkMath` in `markdown.remarkPlugins`. KaTeX CSS is imported in
 * `src/pages/_root.css`.
 */
export function remarkKatexRender() {
  return (tree: unknown) => {
    visit(tree as never, (node: { type: string; value: string; data?: Record<string, unknown> }) => {
      const displayMode = node.type === "math";
      if (!displayMode && node.type !== "inlineMath") return;
      const html = katex.renderToString(node.value, {
        displayMode,
        throwOnError: false,
        output: "htmlAndMathml",
      });
      const fragment = fromHtml(html, { fragment: true });
      node.data ??= {};
      node.data.hName = displayMode ? "div" : "span";
      node.data.hProperties = {
        className: displayMode ? ["math", "math-display"] : ["math", "math-inline"],
      };
      node.data.hChildren = fragment.children;
    });
  };
}
