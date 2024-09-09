import { ConnectDB } from "@/lib/config/db";
import UserModel from "@/lib/models/UserModel";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';

const authOptions={
    providers:[
        Credentials({
            name:"credentials",
            credentials:{},

            async authorize (credentials) {
                const user = {id:'1'};
                return user;
            }
        })
    ],
    session:{
        strategy:"jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:"/admin",
    }
}


const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};