// app/(components)/book-form/service/book.ts
import axiosInstance from "@/config/axiosInstance";
import toast from "react-hot-toast";
import { BookFormValues } from "../schema/form";

export const createBook = async (payload: BookFormValues) => {
  try {
    const response = await axiosInstance.post("/books", payload);

    if (response) {
      return response.data;
    }
  } catch (error: any) {
    if (error.isAxiosError) {
      toast.error(error?.response?.data?.error || "Failed to create book");
    } else {
      toast.error("An unexpected error occurred");
    }
  }
};
