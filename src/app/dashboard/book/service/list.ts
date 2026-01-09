import axiosInstance from "@/config/axiosInstance";
import { BooksResponse } from "../schema/list";

export const getBooks = async (): Promise<BooksResponse> => {
  const res = await axiosInstance.get("/books");

  console.log({ res });

  if (!res.data) {
    throw new Error("Failed to fetch books");
  }

  return res.data;
};
