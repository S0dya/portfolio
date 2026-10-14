/**
 * Convert any common YouTube URL form into a canonical embed URL.
 * Handles: youtu.be/<id>, watch?v=<id>, /embed/<id>, /shorts/<id>, /live/<id>
 * Returns null if no YouTube video ID can be found.
 */
export function youtubeEmbed(url: string | undefined): string | null {
  if (!url) return null;

  const patterns = [
    /youtu\.be\/([A-Za-z0-9_-]{11})/,
    /[?&]v=([A-Za-z0-9_-]{11})/,
    /youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,
    /youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,
    /youtube\.com\/live\/([A-Za-z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
  }

  return null;
}