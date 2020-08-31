export function debounce<Params extends any[]>(
  func: (...args: Params) => (void | Promise<void>),
  timeout: number,
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      return func(...args);
    }, timeout);
  }
}