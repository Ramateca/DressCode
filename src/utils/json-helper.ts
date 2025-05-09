/**
 * Helper functions to handle JSON storage in SQLite
 * Since SQLite doesn't support JSON directly, we store it as strings
 * These functions help with conversion between JSON objects and strings
 */

/**
 * Parses a string into a JSON object
 * @param jsonString The string to parse
 * @returns The parsed JSON object
 */
export function parseJsonField<T>(jsonString: string): T {
  try {
    return JSON.parse(jsonString) as T;
  } catch (error) {
    console.error('Error parsing JSON string:', error);
    return {} as T;
  }
}

/**
 * Converts a JSON object to a string
 * @param jsonObj The JSON object to stringify
 * @returns The stringified JSON
 */
export function stringifyJsonField(jsonObj: any): string {
  try {
    return JSON.stringify(jsonObj);
  } catch (error) {
    console.error('Error stringifying JSON object:', error);
    return '{}';
  }
}

/**
 * Middleware for Prisma that automatically converts JSON fields
 * This can be used to transform data before sending it to the client
 * @param data Data from Prisma
 * @param jsonFields Array of field names that should be parsed as JSON
 * @returns The transformed data with JSON fields parsed
 */
export function transformJsonFields<T extends Record<string, any>>(
  data: T,
  jsonFields: string[]
): T {
  const result = { ...data } as T;
  for (const field of jsonFields) {
    if (typeof result[field] === 'string') {
      (result as any)[field] = parseJsonField(result[field]);
    }
  }
  return result;
}

/**
 * Helper to prepare data for Prisma by converting JSON fields to strings
 * @param data Data to be sent to Prisma
 * @param jsonFields Array of field names that should be stringified
 * @returns The transformed data with JSON fields stringified
 */
export function prepareJsonFieldsForStorage<T extends Record<string, any>>(
  data: T,
  jsonFields: string[]
): T {
  const result = { ...data } as T;
  for (const field of jsonFields) {
    if (typeof result[field] === 'object' && result[field] !== null) {
      (result as any)[field] = stringifyJsonField(result[field]);
    }
  }
  return result;
}
