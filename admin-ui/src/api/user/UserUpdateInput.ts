import { TodoWhereUniqueInput } from "../todo/TodoWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  todo?: TodoWhereUniqueInput | null;
  username?: string;
};
