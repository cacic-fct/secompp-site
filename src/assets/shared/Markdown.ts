import * as markdownItKatexModule from '@vscode/markdown-it-katex';
import createDOMPurify, { type WindowLike } from 'dompurify';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import diff from 'highlight.js/lib/languages/diff';
import graphql from 'highlight.js/lib/languages/graphql';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import markdownLanguage from 'highlight.js/lib/languages/markdown';
import plaintext from 'highlight.js/lib/languages/plaintext';
import python from 'highlight.js/lib/languages/python';
import shell from 'highlight.js/lib/languages/shell';
import sql from 'highlight.js/lib/languages/sql';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';
import MarkdownIt from 'markdown-it';

type MarkdownItKatexPlugin = typeof import('@vscode/markdown-it-katex').default;

const katexPluginModule = markdownItKatexModule.default as MarkdownItKatexPlugin | { default: MarkdownItKatexPlugin };
const markdownItKatex = typeof katexPluginModule === 'function' ? katexPluginModule : katexPluginModule.default;

// Register only languages that are useful for event descriptions. Avoiding the full
// highlight.js language bundle keeps the client payload small, and explicit language
// hints avoid the cost and false positives of automatic language detection.
const highlightLanguages = {
  bash,
  css,
  diff,
  graphql,
  javascript,
  json,
  markdown: markdownLanguage,
  plaintext,
  python,
  shell,
  sql,
  typescript,
  xml,
  yaml,
};

for (const [languageName, languageDefinition] of Object.entries(highlightLanguages)) {
  hljs.registerLanguage(languageName, languageDefinition);
}

function highlightCode(code: string, languageName: string) {
  const normalizedLanguageName = languageName.trim().split(/\s+/u, 1)[0]?.toLowerCase() ?? '';
  const languageClass = normalizedLanguageName ? ` language-${markdown.utils.escapeHtml(normalizedLanguageName)}` : '';

  if (!normalizedLanguageName || !hljs.getLanguage(normalizedLanguageName)) {
    return `<pre><code class="hljs${languageClass}">${markdown.utils.escapeHtml(code)}</code></pre>`;
  }

  try {
    const highlightedCode = hljs.highlight(code, {
      ignoreIllegals: true,
      language: normalizedLanguageName,
    }).value;

    return `<pre><code class="hljs${languageClass}">${highlightedCode}</code></pre>`;
  } catch {
    return `<pre><code class="hljs${languageClass}">${markdown.utils.escapeHtml(code)}</code></pre>`;
  }
}

const markdown = new MarkdownIt({
  breaks: true,
  highlight: highlightCode,
  html: false,
  linkify: true,
  typographer: true,
}).use(markdownItKatex, {
  enableFencedBlocks: true,
  throwOnError: false,
});

export function renderMarkdown(markdownSource: string | null | undefined, windowLike: WindowLike) {
  const purifier = createDOMPurify(windowLike);

  return purifier.sanitize(markdown.render(markdownSource ?? ''), {
    USE_PROFILES: { html: true },
  });
}
