import { parse } from '@twemoji/parser';

const FALLBACK_EMOJI = '❔';
const TWEMOJI_BASE_URL = 'https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg';

export function getTwemojiUrl(emoji: string | null | undefined): string {
  const parsedEmoji = parseEmoji(emoji);
  const fallbackUrl = parseEmoji(FALLBACK_EMOJI)[0]?.url;

  return parsedEmoji[0]?.url ?? fallbackUrl ?? '';
}

function parseEmoji(emoji: string | null | undefined) {
  const value = emoji?.trim() || FALLBACK_EMOJI;

  return parse(value, {
    buildUrl: (codepoints, assetType) => `${TWEMOJI_BASE_URL}/${codepoints}.${assetType}`,
  });
}
