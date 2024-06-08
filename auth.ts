import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google"
import Discord from 'next-auth/providers/discord'
import type { Provider } from "next-auth/providers";

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

const providers: Provider[] = [
  GitHub({
    clientId: process.env.AUTH_GITHUB_ID,
    clientSecret: process.env.AUTH_GITHUB_SECRET,
  }),
  Google({
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET,
  }),
  Discord({
    clientId: process.env.AUTH_DISCORD_ID,
    clientSecret: process.env.AUTH_DISCORD_SECRET,
  }),
  // Credentials({
  //   async authorize(credentials) {
  //     const parsedCredentials = z
  //       .object({ email: z.string().email(), password: z.string().min(6) })
  //       .safeParse(credentials);

  //     if (parsedCredentials.success) {
  //       const { email, password } = parsedCredentials.data;
  //       const user = await getUser(email);
  //       if (!user) return null;
  //       const passwordsMatch = await bcrypt.compare(password, user.password);

  //       if (passwordsMatch) return user;
  //     }

  //     console.log('Invalid credentials');
  //     return null;
  //   },
  // }),
];

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider()
    console.log(providerData.name);
    return { id: providerData.id, name: providerData.name }
  } else {
    console.log(provider.name);
    return { id: provider.id, name: provider.name }
  }
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  debug: true,
  providers,
});