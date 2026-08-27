const WORDS_PER_MINUTE = 200;

export function getReadingTime(content: string | null | undefined): string | null {
  if (!content?.trim()) return null;

  const readableContent = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]*`/g, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");
  const wordCount = readableContent.match(/\b[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu)?.length ?? 0;

  if (!wordCount) return null;

  return `${Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE))} min read`;
}
