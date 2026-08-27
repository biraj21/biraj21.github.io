/**
 * Formats a date string into a human-readable date. Used for displaying blog post publish dates.
 *
 * @param pubDate
 * @returns
 */
export function formatDate(pubDate: string | number | Date | null | undefined): string | null {
  return pubDate
    ? new Date(pubDate instanceof Date ? pubDate.getTime() : pubDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        // add timezone to UTC so it doesn't try to change the day based on the user's timezone
        timeZone: "UTC",
      })
    : null;
}
