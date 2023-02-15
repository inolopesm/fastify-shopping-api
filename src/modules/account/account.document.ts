import { Document } from "mongodb";

export type AccountDocument = Document & {
  username: string;
};
