import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TodoWhereUniqueInput } from "../todo/TodoWhereUniqueInput";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  todo?: TodoWhereUniqueInput;
  username?: StringFilter;
};
