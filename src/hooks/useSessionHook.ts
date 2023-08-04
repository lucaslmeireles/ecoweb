'use client'

import { useSession } from "next-auth/react";

export const useSessionHook = () => {
    const {data: session} = useSession();
    return session;

}

