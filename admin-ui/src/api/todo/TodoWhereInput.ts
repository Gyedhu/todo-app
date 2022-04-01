import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoWhereInput = {
  completed?: BooleanFilter;
  content?: StringFilter;
  id?: StringFilter;
  userId?: UserWhereUniqueInput;
};
