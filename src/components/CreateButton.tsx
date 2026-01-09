"use client";
import { useRouter } from "next/navigation";

export default function CreateButton() {
  const router = useRouter();

  const handleCreateClick = () => {
    router.push("/form/create/upload");
  };

  return (
    <button className="btn w-fit" onClick={handleCreateClick}>
      Create
    </button>
  );
}
