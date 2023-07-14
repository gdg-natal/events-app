/**
 * Takes a string and formats it (remove spaces and accents)
 * to look good in an URL path.
 * @param str
 * @returns
 */
export default function urlFormatString(str: string): string {
  return (
    str
      // Remove spaces and replace with "-"
      .split(" ")
      .join("-")
      // Split unicode fancy code points to expose accents
      .normalize("NFD")
      // Remove accent code points
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
  );
}
