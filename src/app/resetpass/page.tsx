"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ChangePassword from "../components/ChangePassword";

const ResetPassword = () => {
  const session = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/resetpass");
    } else {
      // If the user is not authenticated, it will redirect to login page
      router.replace("/adminLogin");
    }
  }, [session, router]);

  return <ChangePassword />;
};

export default ResetPassword;
