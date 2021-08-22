export const random = (n: number) => Math.floor(Math.random() * n);
export function randomChoice<T>(arr: T[]) {
  return arr[random(arr.length)];
}
