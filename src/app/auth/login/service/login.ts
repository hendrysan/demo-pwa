import axiosInstance from "@/config/axiosInstance";
import toast from "react-hot-toast";

export const loginAccount = async (payload) => {
  try {
    const response = await axiosInstance.post("/auth/login", payload);

    if (response) {
      return response?.data;
    }
  } catch (error: any) {
    // If the error is an AxiosError, prevent logging the full stack
    if (error.isAxiosError) {
      toast.error(error?.response?.data?.error || "Login failed");
    } else {
      // Log only a generic error if it's not an AxiosError
      toast.error("An unexpected error occurred");
    }
  }
};
