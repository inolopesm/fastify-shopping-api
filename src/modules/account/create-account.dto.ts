import type { JSONSchemaType } from "ajv";

export type CreateAccountDto = {
  username: string;
};

export const createAccountDto: JSONSchemaType<CreateAccountDto> = {
  type: "object",
  properties: { username: { type: "string" } },
  required: ["username"]
};
