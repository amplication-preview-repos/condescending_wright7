import { JsonValue } from "type-fest";

export type Profile = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  headline: string | null;
  summary: string | null;
  experience: JsonValue;
  education: JsonValue;
  profilePicture: JsonValue;
};
