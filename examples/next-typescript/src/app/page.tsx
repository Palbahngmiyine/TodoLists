import Form from "next/form";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-4xl font-bold mb-6">Next.js TodoList</h1>
      <div className="flex flex-col container mx-auto px-3">
        <div className="flex gap-2 mb-4">          
          <input type="text" name="todo" placeholder="What will do?" autoComplete="off" className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <button type="submit" className="bg-sky-400 text-white px-4 py-2 rounded-md">Submit</button>
      </div>
    </div>
  );
}
