import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  headline?: SortOrder;
  summary?: SortOrder;
  experience?: SortOrder;
  education?: SortOrder;
  profilePicture?: SortOrder;
};
