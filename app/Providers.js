'use client';

import {SessionProvider} from "next-auth/react";
import { Chilanka } from "next/font/google";
import { Children } from "react";

export const AuthProvider=({children})=>{
    return <SessionProvider>{children}</SessionProvider>
}