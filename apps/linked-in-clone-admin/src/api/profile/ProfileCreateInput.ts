import { InputJsonValue } from "../../types";

export type ProfileCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  headline?: string | null;
  summary?: string | null;
  experience?: InputJsonValue;
  education?: InputJsonValue;
  profilePicture?: InputJsonValue;
};
