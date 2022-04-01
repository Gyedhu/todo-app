import { SortOrder } from "../../util/SortOrder";

export type TodoOrderByInput = {
  completed?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userIdId?: SortOrder;
};
