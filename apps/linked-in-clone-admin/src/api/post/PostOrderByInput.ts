import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  media?: SortOrder;
  likes?: SortOrder;
  comments?: SortOrder;
  author?: SortOrder;
};
