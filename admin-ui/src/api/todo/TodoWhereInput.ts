import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TodoWhereInput = {
  completed?: BooleanFilter;
  content?: StringFilter;
  id?: StringFilter;
  userId?: UserListRelationFilter;
};
