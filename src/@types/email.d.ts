export type EmailLookupParams = {
  /**
   * Search request
   */
  query: string;
  /**
   * Result limit\
   * Maximum: `20`\
   * Default: `10`
   */
  limit?: number;
}


export type EmailSuggestion = {
  local: string;
  domain: string;
  type: null;
  source: null;
  qc: null;
};

export type EmailResponse = {
  suggestions: Array<{
    value: string;
    unrestricted_value: string;
    data: EmailSuggestion;
  }>;
}

