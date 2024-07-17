import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type GetServerSidePropsContext } from "next";
import { getServerSession, type DefaultSession, type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import { env } from "~/env.js";
import { db } from "~/server/db";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
      image: string | null;
      name: string | null;
      role: UserRole;
    };
  }

  enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN",
  }

  interface User {
    id: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | null;
    image?: string | null;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        
        if (!credentials) {
          throw new Error('No credentials provided');
        }
        
        const user = await db.user.findUnique({
          where: { email: credentials.email },
        });
        
        if (!user) {
          throw new Error('No user found with this email');
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordValid) {
          throw new Error('Invalid password');
        }

        return user;
      }
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {    
      try {
        const existingUser = await db.user.findFirst({
          where: {
            email: user.email,
          },
        });

        // if (account?.provider === "credentials") {
        //   return true;
        // }

        if (existingUser) {
          await db.user.update({
            where: {
              email: user.email,
            },
            data: {
              name: user.name,
              image: user.image,
            },
          });
        } else {
          if (account){
            await db.user.create({
              data: {
                email: user.email,
                name: user.name,
                image: user.image,
                password: user.email,
                accounts: {
                  create: {
                    providerAccountId: account.providerAccountId,
                    provider: account.provider,
                    type: account.type,
                    access_token: account.access_token,
                    refresh_token: account.refresh_token,
                    expires_at: account.expires_at,
                    token_type: account.token_type,
                    scope: account.scope,
                    id_token: account.id_token,
                  },
                },
              },
            });
          }
        }

        return true;
      } catch (error) {
        console.error("Error during signIn callback:", error);
        return false;
      }
    },
    async session({ session, user }) {
      const foundUser = await db.user.findFirst({
        where: {
          id: user.id,
        },
      });
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
          image: user.image,
          role: foundUser?.role
        },
      };
    },
  },
  pages: {
    signIn: '/login',
  },
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
