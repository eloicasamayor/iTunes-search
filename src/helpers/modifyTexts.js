export function limitText(text, limit) {
  if (text && text.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
}
