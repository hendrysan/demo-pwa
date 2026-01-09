import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as XLSX from "xlsx";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const parseExcelFile = (file: File, onParsed: (data: any[]) => void) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const workbook = XLSX.read(e.target?.result, { type: "binary" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const parsedData = XLSX.utils.sheet_to_json(worksheet, {
      header: [
        "kelompok_pengukuran",
        "rentang_ukur",
        "unit",
        "kota",
        "cmc_value",
        "cmc_unit",
      ],
    });
    onParsed(parsedData.slice(1));
  };

  reader.readAsArrayBuffer(file);
};

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
