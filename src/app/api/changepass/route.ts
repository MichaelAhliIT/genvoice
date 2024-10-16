import AdminUserModel from "@/app/models/AdminUser";
import connect from "@/app/utils/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const res = await req.json();
  const oldPass = res.oldPass;
  const newPass = res.newPass;

  await connect();

  // Find the user with the provided old password
  // Actually this whole process needs to be encrypted but for the simplicity I don't use any.
  const user = await AdminUserModel.findOne({ password: oldPass });

  if (!user) {
    return new NextResponse("Old Password is Wrong", { status: 201 });
  } else {
    // Update the password
    user.password = newPass;
    await user.save(); // Save the updated user
    return new NextResponse("Password Changed Success", { status: 200 });
  }
};
