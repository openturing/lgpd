import { TurNLPEntityValidateResponse } from "./nlp-validate-entity.model";

export interface TurNLPValidateResponse {
  vendor: string;
  locale: string;
  text: string;
  entities: TurNLPEntityValidateResponse[];
}
