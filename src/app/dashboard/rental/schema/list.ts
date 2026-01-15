import { Book } from "../../book/schema/list";

export type Rental = {
  id: number;
  user_id: number;
  book_id: number;
  rented_at: string;
  returned_at: string | null;
  created_at: string;
  updated_at: string;
  book: Book;
};
