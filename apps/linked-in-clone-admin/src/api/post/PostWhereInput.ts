import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PostWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  media?: JsonFilter;
  likes?: IntNullableFilter;
  comments?: JsonFilter;
  author?: StringNullableFilter;
};
