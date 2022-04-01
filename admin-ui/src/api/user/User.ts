import { Todo } from "../todo/Todo";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  todo?: Todo | null;
  updatedAt: Date;
  username: string;
};
