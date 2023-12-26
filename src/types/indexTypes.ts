import { Type } from "../utils/types";

export interface Commit {
  type: Type;
  description: string;
  scope: string;
  body: string;
  footer: string;
}
