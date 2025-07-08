"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <h1>Hello World</h1>
      <button
        onClick={() => router.push("/about?test=test")}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Go to About
      </button>
    </>
  );
}
