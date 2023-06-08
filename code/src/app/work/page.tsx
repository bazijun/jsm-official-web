"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function WorkPage() {
  const router = useRouter();
  const a = useTransition();
  return (
    <>
      <h1 onClick={() => router.push("/home")}>go home</h1>
      <ul>
        <li onClick={() => router.push("/post")}>post</li>
      </ul>
    </>
  );
}
