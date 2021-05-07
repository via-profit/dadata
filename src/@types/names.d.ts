export type NameLookupParams = {
  /**
   * Search request
   */
  query: string | string[];
}


export type NameSuggestion = {
  /**
   * Original full name in one line
   */
  source: string;
  /**
   * Standardized full name in one line
   */
  result: string;
  /**
   * FULL NAME in the genitive case (who?)
   */
  result_genitive: string;
  /**
   * FULL NAME in the dative case (to whom?)
   */
  result_dative: string;
  /**
   * FULL NAME in the creative case (by whom?)
   */
  result_ablative: string;
  surname: string | null;
  name: string | null;
  patronymic: string | null;
  gender: 'MALE' | 'FEMALE';
  qc: number;
};

export type NameResponse = NameSuggestion[];