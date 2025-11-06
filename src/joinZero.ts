// export function joinZero(value: number): string {
//   return (Array(8).join('0') + value.toString(10)).slice(8 * -1);
// }

export function joinZero(value: number, length?: number): string {
  return (Array(length || 8).join('0') + value.toString(10)).slice(
    length || 8 * -1,
  );
}
