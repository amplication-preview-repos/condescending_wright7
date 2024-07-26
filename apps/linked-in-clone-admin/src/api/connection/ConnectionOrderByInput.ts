import { SortOrder } from "../../util/SortOrder";

export type ConnectionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  fromUser?: SortOrder;
  toUser?: SortOrder;
};
