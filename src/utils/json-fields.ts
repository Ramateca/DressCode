/**
 * Definition of fields that should be treated as JSON
 * This is used to automatically convert between string (SQLite storage)
 * and JSON object (application usage)
 */

export const JSON_FIELDS = {
  vestito: ['customTheme'],
  fibra: ['definizione'],
  formResponse: ['data']
};
