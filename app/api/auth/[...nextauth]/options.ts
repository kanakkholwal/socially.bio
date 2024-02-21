import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FaceBookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "src/lib/dbConnect";
import UserModel from "src/models/user";
// Define types for environment variables
interface AuthEnv {
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    NEXT_AUTH_SECRET: string;
    NEXTAUTH_URL: string;
    FACEBOOK_ID: string;
    FACEBOOK_SECRET: string;
}

// Define types for user object
interface User {
    _id: string;
    id?: string;
    name: string;
    email: string;
    username: string;
    account_type?: string;
    profilePicture: string;
    role?: string;
    verified?: boolean;
    provider: string;
}
// Read environment variables
const env: AuthEnv = {
    GOOGLE_ID: process.env.GOOGLE_ID || "",
    GOOGLE_SECRET: process.env.GOOGLE_SECRET || "",
    NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET || "",
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || "",
    FACEBOOK_ID: process.env.FACEBOOK_ID || "",
    FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || "",

};

// Check if all required environment variables are defined
Object.values(env).forEach((value) => {
    if (!value) {
        throw new Error(`Environment variable ${value} is not defined`);
    }
});
const useSecureCookies = env.NEXTAUTH_URL.startsWith('https://')
const cookiePrefix = useSecureCookies ? '__Secure-' : ''
const hostName = new URL(env.NEXTAUTH_URL).hostname;

export const authOptions: NextAuthOptions = {
    // Enable JSON Web Tokens since we will not store sessions in our DB
    session: {
        strategy: "jwt",
    },
    secret: env.NEXT_AUTH_SECRET,
    cookies: {
        sessionToken: {
            name: `${useSecureCookies ? "__Secure-" : ""}next-auth.session-token`,
            options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: useSecureCookies,
                domain: hostName == 'localhost' ? hostName : '.' + "socially.bio" // add a . in front so that subdomains are included

            }
        },
    },
    providers:[],
    pages: {
        // Here you can define your own custom pages for login, recover password, etc.
        signIn: 'https://app.socially.bio/', // Displays sign in buttons
        // signOut: '/auth/sign out',
        // error: '/auth/error',
        // verifyRequest: '/auth/verify-request',
        newUser: 'https://app.socially.bio/register'
    },
}



