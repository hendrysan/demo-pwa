import axiosInstance from "@/config/axiosInstance";
import toast from "react-hot-toast";
import { RentalFormValues } from "../schema/input";

export const createRental = async (payload: RentalFormValues) => {
  try {
    const newRental = {
      book_id: payload.bookId,
    };
    const response = await axiosInstance.post("/rentals", newRental);

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
