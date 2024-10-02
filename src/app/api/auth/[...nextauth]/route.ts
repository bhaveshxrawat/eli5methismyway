import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import prisma from "@/lib/db";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET ?? "secret",
    // callbacks: {
    //     async signIn({ account, profile }) {
    //         if (account?.provider === "google") {
    //             try {
    //                 const user = await prisma.user.findUnique({
    //                     where: {
    //                         email: profile?.email!,
    //                     },
    //                 });

    //                 if (!user) {
    //                     const newUser = await prisma.user.create({
    //                         data: {
    //                             email: profile?.email!,
    //                             name: profile?.name || undefined,
    //                             provider: "Google",
    //                         },
    //                     });
    //                 }
    //                 return true;
    //             } catch (error) {
    //                 console.log(error);
    //                 //throw error;
    //                 return false;
    //             }
    //         }
    //     },
    // },
});

export { handler as GET, handler as POST };
