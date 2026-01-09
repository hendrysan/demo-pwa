import { BookForm } from "../components/form";

export default function NewBookPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Add / Edit Book</h1>
      <BookForm />
    </div>
  );
}
