import { InputJsonValue } from "../../types";

export type PostUpdateInput = {
  content?: string | null;
  media?: InputJsonValue;
  likes?: number | null;
  comments?: InputJsonValue;
  author?: string | null;
};
