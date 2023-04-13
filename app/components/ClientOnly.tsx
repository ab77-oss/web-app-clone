"use client"

import React, { ReactNode, useEffect, useState } from "react"

interface ClientOnlyProps {
    children:ReactNode
}

export const ClientOnly:React.FC<ClientOnlyProps> = ({
    children
}) => {
    const [hasMounted, setHasMounted] = useState(false)
    useEffect(() => {
        setHasMounted(true);
    },[]);

    if(!hasMounted){
        return null
    }
    return (
        <>
            {children}
        </>
    )

}
