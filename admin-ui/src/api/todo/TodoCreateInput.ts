import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoCreateInput = {
  completed: boolean;
  content: string;
  userId: UserWhereUniqueInput;
};
