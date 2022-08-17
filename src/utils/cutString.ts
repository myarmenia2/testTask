export const cutDescription = (str: string, size: number) => {
  return str.length > size ? str.slice(0, size - 1) + "…" : str;
}