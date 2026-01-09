import Navbar from "@/components/NavBar";
import CreateButton from "@/components/CreateButton";

export default function Page() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-2rem)]">
      <Navbar />
      <div className="center-container">
        <div className="flex mb-5 w-[85%] justify-end">
          <CreateButton />
        </div>
        <h1>Hello World</h1>
      </div>
    </div>
  );
}
