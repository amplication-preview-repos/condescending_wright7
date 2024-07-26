import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ProfileWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  headline?: StringNullableFilter;
  summary?: StringNullableFilter;
  experience?: JsonFilter;
  education?: JsonFilter;
  profilePicture?: JsonFilter;
};
