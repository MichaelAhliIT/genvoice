"use server";

import AdminUserModel from "../../models/AdminUser";
import connect from "../../utils/db";

export default async function getAdminData(username: string, password: string) {
  try {
    await connect();
    const data = await AdminUserModel.findOne({
      username: username,
      password: password,
    });
    if (data) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}
