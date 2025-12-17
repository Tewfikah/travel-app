import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-800">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
      <h1 className="text-3xl font-bold text-blue-600">
        Welcome to Front end practice!
      </h1>

      <p className="mt-4 text-gray-600">
       this is my first next js project
      </p>
      </div>
    </main>
  );
}
