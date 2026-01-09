import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  return date.toLocaleString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export const mapNewKeyName = ({ keywords, keyName, updateKeyName }) => {
  return keywords.map((item) => {
    const { [keyName]: oldValue, ...rest } = item;
    return {
      [updateKeyName]: oldValue,
      ...rest,
    };
  });
};

export const mapStepToLabel = (step: string): string => {
  const mapping: Record<number, string> = {
    "0": "Upload File",
    "1": "Select Lab",
    "2": "Write Email",
    "3": "Email Sent",
  };

  return mapping[step] ?? "Unknown Step";
};
