import axiosInstance from "@/config/axiosInstance";
import { Rental } from "../schema/list";

type GetRentalsResponse = {
  data: Rental[];
};

export const getRentals = async (): Promise<GetRentalsResponse> => {
  const res = await axiosInstance.get("/rentals");

  console.log({ res });

  if (!res.data) {
    throw new Error("Failed to fetch rental books");
  }

  return res.data;
};
