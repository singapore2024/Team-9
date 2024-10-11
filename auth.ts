import NextAuth, { DefaultSession } from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./lib/db"
import User from "./app/models/User"
import { connectToDB } from "./lib/mongoose"
import authConfig from "./auth.config"

// Extend the session user type to include role
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
    } & DefaultSession["user"];
  }
}

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async jwt({token}) {
      // To add a custom property to the token,  do something like token.customProperty = "customValue", it will auto create the property and fill it with that value
      return token;
    },
    async session({session, token}) { 
      await connectToDB();
      const currentUser = await User.findOne({ email: session.user?.email });
      
      if (token.sub && session.user && currentUser) {
        session.user.id = currentUser._id.toString();
        session.user.name = currentUser.name;
        session.user.role = currentUser.role;
        session.user.email = currentUser.email;
      }
      return session;
    },

    async signIn({ user, account, profile }) {
      await connectToDB();
  
      const existingUser = await User.findOne({ email: profile?.email });
  
      if (existingUser) {

        if (!existingUser.providers.includes(account?.provider)) {
          existingUser.providers.push(account?.provider);
          await existingUser.save();
        }
        return true;
      }
  
      return true;
    },
  },
  session: {
    strategy: "jwt",
  },
  ...authConfig,
 
})
