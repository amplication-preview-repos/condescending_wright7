import { InputJsonValue } from "../../types";

export type PostCreateInput = {
  content?: string | null;
  media?: InputJsonValue;
  likes?: number | null;
  comments?: InputJsonValue;
  author?: string | null;
};
