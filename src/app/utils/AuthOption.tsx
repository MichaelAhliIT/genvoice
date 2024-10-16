import AdminUserModel from "@/app/models/AdminUser";
import connect from "@/app/utils/db";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption: any = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        await connect();

        try {
          const user = await AdminUserModel.findOne({
            username: credentials.username,
            password: credentials.password,
          });
          if (user) {
            return user;
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
