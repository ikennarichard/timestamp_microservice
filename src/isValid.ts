/**
 * Checks whether value is a valid date instance
 * @param value - date entry
 * @returns - boolean
 */
export default function isValid(value: number): boolean {
  return !isNaN(value);
}