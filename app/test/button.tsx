"use client";
import { Button } from "@/components/ui/button";
import { signIn,signOut } from "next-auth/react";

export default function Wrapper() {
    return (<div className='flex justify-center items-center min-h-screen w-full'>
       <Button
       onClick={() => signIn("google")}
       >Signin</Button>
       <Button
       onClick={() => signOut()}
       >
        
        Signout
       </Button>
    </div>)
}