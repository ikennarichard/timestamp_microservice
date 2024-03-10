/**
 * Returns whether value is a valid timestamp
 * @param value - timestamp
 * @returns - boolean
 */
export default function isValid(value: number): boolean {
  return !isNaN(value);
}