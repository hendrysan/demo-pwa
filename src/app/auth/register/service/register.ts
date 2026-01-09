import axiosInstance from "@/config/axiosInstance";

export const createAccount = async (payload) => {
  try {
    const response = await axiosInstance.post("/auth/register", payload);

    return response.data;
  } catch (error) {
    console.error("Failes create account:", error);
    throw error;
  }
};
