import { UserCreateNestedManyWithoutTodosInput } from "./UserCreateNestedManyWithoutTodosInput";

export type TodoCreateInput = {
  completed: boolean;
  content: string;
  userId?: UserCreateNestedManyWithoutTodosInput;
};
