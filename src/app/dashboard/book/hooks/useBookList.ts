"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Book, BooksResponse } from "../schema/list";
import { getBooks } from "../service/list";

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [pagination] = useState<Omit<BooksResponse, "data"> | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchBooks = async () => {
    try {
      setIsLoading(true);
      const res = await getBooks();

      setBooks(res.data);
      //   setPagination({
      //     current_page: res.current_page,
      //     first_page_url: res.first_page_url,
      //     last_page: res.last_page,
      //     last_page_url: res.last_page_url,
      //     next_page_url: res.next_page_url,
      //     prev_page_url: res.prev_page_url,
      //     per_page: res.per_page,
      //     total: res.total,
      //     path: res.path,
      //     from: res.from,
      //     to: res.to,
      //     links: res.links,
      //   });
    } catch (error) {
      console.error(error);
      toast.error("Failed to load books");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return {
    books,
    pagination,
    isLoading,
    page,
    setPage,
    refetch: fetchBooks,
  };
}
