import { InputJsonValue } from "../../types";

export type ProfileUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  headline?: string | null;
  summary?: string | null;
  experience?: InputJsonValue;
  education?: InputJsonValue;
  profilePicture?: InputJsonValue;
};
