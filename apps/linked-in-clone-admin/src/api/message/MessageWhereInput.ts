import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  fromUser?: StringNullableFilter;
  toUser?: StringNullableFilter;
};
