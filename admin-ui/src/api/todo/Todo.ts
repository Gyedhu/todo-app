import { User } from "../user/User";

export type Todo = {
  completed: boolean;
  content: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  userId?: User;
};
