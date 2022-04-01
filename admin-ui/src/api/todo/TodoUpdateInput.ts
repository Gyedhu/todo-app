import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoUpdateInput = {
  completed?: boolean;
  content?: string;
  userId?: UserWhereUniqueInput;
};
