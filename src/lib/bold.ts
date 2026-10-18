/**
 * Resume copy marks emphasised spans with `**`. Render them as real <strong>.
 * Everything else is passed through as plain text.
 */
export function boldParts(input: string): { text: string; bold: boolean }[] {
  return input
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((chunk) =>
      chunk.startsWith('**') && chunk.endsWith('**')
        ? { text: chunk.slice(2, -2), bold: true }
        : { text: chunk, bold: false }
    );
}