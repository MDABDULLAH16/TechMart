'use client'
 
import { useSession } from 'next-auth/react';
import React from 'react';

const Test = () => {

    const { data: session, status } = useSession();
   console.log(session,status);
   

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Test Page { JSON.stringify(session) }</h1>
        </div>
    );

};

export default Test;