"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import PersonalPage from "../components/PersonalPage";

export default function Personal() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // If the user is not authenticated, it will redirect to login page
      router.replace("/adminLogin");
    },
  });
  if (status === "loading") {
    return;
  }
  return <PersonalPage />;
}
