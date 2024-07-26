import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ConnectionWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  fromUser?: StringNullableFilter;
  toUser?: StringNullableFilter;
};
