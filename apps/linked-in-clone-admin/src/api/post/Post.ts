import { JsonValue } from "type-fest";

export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  media: JsonValue;
  likes: number | null;
  comments: JsonValue;
  author: string | null;
};
