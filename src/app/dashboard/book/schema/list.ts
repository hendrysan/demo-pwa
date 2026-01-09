export interface Book {
  id: number;
  title: string;
  author: string;
  stock: number;
  created_at: string;
  updated_at: string;
}

export interface BooksResponse {
  current_page: number;
  data: Book[];
  first_page_url: string;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  prev_page_url: string | null;
  per_page: number;
  total: number;
  path: string;
  form: number | null;
  to: number | null;
}
