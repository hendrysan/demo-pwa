import axiosInstance from "@/config/axiosInstance";
import toast from "react-hot-toast";

export const returnRental = async (rentalId: number) => {
  try {
    const response = await axiosInstance.post(`/rentals/${rentalId}/return`);

    if (response) {
      return response.data;
    }
  } catch (error: any) {
    if (error.isAxiosError) {
      toast.error(error?.response?.data?.error || "Failed to return a book");
    } else {
      toast.error("An unexpected error occurred");
    }
  }
};
