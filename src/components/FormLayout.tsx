"use client";

import Navbar from "@/components/NavBar";
import StepProgress from "@/components/StepProgress";
import { useRouter } from "next/navigation"; // pakai next/navigation untuk App Router

type Props = {
  children: React.ReactNode;
  currentStep: number;
  mode: string;
  id?: string;
};

export default function FormLayout({ children, currentStep, mode, id }: Props) {
  const router = useRouter();

  // Mapping step index ke route path
  const stepPaths = ["upload", "lab", "email", "review", "sent"];

  const handleStepChange = (targetStep: number) => {
    if (targetStep < 0 || targetStep >= stepPaths.length) return;

    const path = stepPaths[targetStep];
    router.push(
      `/form/${mode}/${path}?id=${id}&stepId=${stepPaths.indexOf(path)}`
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 w-full p-6 gap-5 flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 bg-white shadow-xl rounded-xl">
          <StepProgress
            currentStep={currentStep}
            onStepChange={handleStepChange}
          />
        </div>
        <div className="w-full lg:w-3/4">{children}</div>
      </div>
    </div>
  );
}
