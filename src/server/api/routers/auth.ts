// src/server/routers/auth.ts
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import { db } from '~/server/db';
import jwt from 'jsonwebtoken';

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(8),
      confirmPassword: z.string().min(8),
    }))
    .mutation(async ({ input }) => {
      const { name, email, password, confirmPassword } = input;

      if (password != confirmPassword){
        return {
          code: 'BAD_REQUEST',
          message: 'Password not match',
        };
      }

      const existingUser = await db.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return {
          code: 'CONFLICT',
          message: 'Email already exists',
        };
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const access_token = jwt.sign(
        { email: email, name: name },
        "ducanhdeptrai",
        { expiresIn: '1h' }
      );

      const refresh_token = jwt.sign(
        { email: email, name: name },
        "ducanhdeptrai+1",
        { expiresIn: '1h' }
      );

      const newUser = await db.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          image: "https://th.bing.com/th/id/OIP.S2W19xappbvIzlxm-QP8WQAAAA?rs=1&pid=ImgDetMain",
          accounts: {
            create: {
              providerAccountId: "Credentials",
              provider: "Credentials",
              type: "Credentials",
              access_token: access_token,
              refresh_token: refresh_token,
              expires_at: null,
              token_type: 'Bearer',
              scope: "Credentials",
              id_token: "Credentials",
            },
          },
        },
      });

      return {
        code: 'CREATED',
        message: 'Create user successful',
        metadata: newUser
      };
    }),
});
