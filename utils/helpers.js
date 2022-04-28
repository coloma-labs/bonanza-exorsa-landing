export const truncateBetween = (str, length = 4) => {
  if (str) {
    const truncatedStart = str.substring(0, length);
    const truncatedEnd = str.substring(str.length - length, str.length);
    return truncatedStart + "..." + truncatedEnd;
  }
};
