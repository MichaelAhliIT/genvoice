"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import PersonalPage from "../components/PersonalPage";

export default function Personal() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.replace("/adminLogin");
    },
  });
  if (status === "loading") {
    return;
  }
  return <PersonalPage />;
}
