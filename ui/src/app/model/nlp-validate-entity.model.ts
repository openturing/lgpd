import { TurNLPEntity } from "./nlp-entity.model";

export interface TurNLPEntityValidateResponse {
  type: TurNLPEntity;
  terms: string[];
}
