"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const [responseCode, setResponseCode] = useState<number | null>(null);
  const [waitReset, setWaitReset] = useState<Boolean>(false);

  const session = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/resetpass");
    } else {
      router.replace("/adminLogin");
    }
  }, [session, router]);

  const handleSend = async (event: any) => {
    event.preventDefault();
    setWaitReset(true);
    await axios
      .post("/api/changepass", { oldPass: oldPass, newPass: newPass })
      .then(async (response) => {
        setResetMessage(response.data);
        setResponseCode(response.status);
        setWaitReset(false);
        if (response.status === 200) {
          signOut({ callbackUrl: "/adminLogin" });
        }
      });
    setOldPass("");
    setNewPass("");
  };

  return (
    <>
      <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Reset Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Old Password
              </label>
              <div className="mt-2">
                <input
                  id="oldpass"
                  name="oldpass"
                  type="password"
                  required
                  value={oldPass}
                  onChange={(e) => setOldPass(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  New Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="newpass"
                  name="newpass"
                  type="password"
                  required
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              {responseCode === 201 ? (
                <label htmlFor="error" className="text-red-500">
                  {resetMessage}
                </label>
              ) : (
                responseCode === 200 && (
                  <label htmlFor="success" className="text-green-500">
                    {resetMessage}
                  </label>
                )
              )}
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSend}
              >
                {!waitReset ? (
                  "Reset"
                ) : (
                  <span className="loading loading-dots loading-xs"></span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
