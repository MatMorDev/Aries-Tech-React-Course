import { Todo } from "../todos";

export interface ToDoListResponse {
  todos: Todo[];
  skip: number;
  limit: number;
  total: number;
}
