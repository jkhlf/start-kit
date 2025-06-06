import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // ou "mysql", "postgresql", etc
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
    },
    advanced: {
        crossSubDomainCookies: {
            enabled: true,
            domain: ".vercel.app",
        },
        defaultCookieAttributes: {
            secure: true,
            httpOnly: true,
            sameSite: "none",
            partitioned: true,
        },
        useSecureCookies: true,
    },
    trustedOrigins: [
        'https://start-kit-two.vercel.app',
        'https://start-kit-git-main-jkhlfs-projects.vercel.app',
        'https://start-bl962jjm1-jkhlfs-projects.vercel.app',
    ],
});
