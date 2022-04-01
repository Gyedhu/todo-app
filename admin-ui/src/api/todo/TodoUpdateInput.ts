import { UserUpdateManyWithoutTodosInput } from "./UserUpdateManyWithoutTodosInput";

export type TodoUpdateInput = {
  completed?: boolean;
  content?: string;
  userId?: UserUpdateManyWithoutTodosInput;
};
