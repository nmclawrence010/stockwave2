"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function LandingPage() {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user, router]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#081d2b] to-[#0f3854] text-white">
      <h1 className="text-6xl font-bold mb-8">Welcome to Stockwave</h1>
      <p className="text-xl mb-12">Your personal stock market assistant</p>
      <Link href="/api/auth/login?returnTo=/home">
        <button className="bg-[#fed001] text-[#081d2b] px-8 py-3 rounded-full font-semibold text-lg hover:bg-white transition duration-300 flex items-center space-x-2">
          <span>Login / Sign Up</span>
        </button>
      </Link>
    </div>
  );
}
