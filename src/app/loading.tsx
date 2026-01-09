import { PacmanLoader } from "react-spinners";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex flex-col min-h-[calc(100vh-2rem)] w-full">
      <div className="center-container mt-20">
        <PacmanLoader size={30} color="#946BC6" />
      </div>
    </div>
  );
}
