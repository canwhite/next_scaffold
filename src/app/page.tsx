"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <h1>Hello World</h1>

      <Button
        size="sm"
        className="mt-4 w-[200px] bg-blue-200"
        variant="outline"
        onClick={() => router.push("/about?test=test")}>
        about
      </Button>
    </>
  );
}
