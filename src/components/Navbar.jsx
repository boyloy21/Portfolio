'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Navbar() {
    const { data: session, status } = useSession();
    const pathname = usePathname();
    const id = session?.user?.id;
    const isActive = (path) =>  pathname === path;
    return (
        <nav className="bg-zinc-600 p-6 w-full">
            <div className="container flex flex-row justify-between">
                <div className="flex justify-start items-center">
                    <Image src="/images/chheanyun.jpg" alt="Chhean Yun" width={60} height={60} className="rounded-full border-4 border-white" />
                    <h1 className="text-3xl font-bold text-white ml-2">Chhean Yun</h1>
                </div>
                <div className="flex justify-end items-center ">
                    <Link 
                        href="/" className={`text-2xl py-2 px-6 mx-4 hover:underline transition duration-75 ease-in-out transform hover:scale-110 hover:bg-blue-500 hover:text-white rounded-lg ${
                        isActive("/") ? "text-blue-500 font-bold text-3xl" : "text-white"
                        }`}  >Home</Link>
                    <Link className={`text-2xl px-6 py-2 mx-4 rounded-lg transition duration-75 ease-in-out transform hover:scale-110 hover:bg-blue-500 hover:underline hover:text-white ${
                        isActive("/skill") ? "text-blue-500 font-bold text-3xl" : "text-white"
                        }`} href="/skill">Skill</Link>
                    <Link className={`text-2xl px-6 py-2 mx-4 rounded-lg transition duration-75 ease-in-out transform hover:scale-110 hover:bg-blue-500 hover:underline hover:text-white ${
                        isActive("/projects") ? "text-blue-500 font-bold text-3xl" : "text-white"
                        }`} href="/projects">Project</Link>
                    <Link className={`text-2xl px-6 py-2 mx-4 rounded-lg transition duration-75 ease-in-out transform hover:scale-110 hover:bg-blue-500 hover:underline hover:text-white ${
                        isActive("/document") ? "text-blue-500 font-bold text-3xl" : "text-white"
                        }`} href="/document">Document</Link>
                    <Link className={`text-2xl px-6 py-2 mx-4 rounded-lg transition duration-75 ease-in-out transform hover:scale-110 hover:bg-blue-500 hover:underline hover:text-white ${
                        isActive("/about") ? "text-blue-500 font-bold text-3xl" : "text-white"
                        }`} href="/about">About</Link>
                    <div className="ml-6 mr-4">
                        <Link className={`text-2xl px-2 py-2  border-4 font-bold text-white  text-center   rounded-lg transition duration-75 ease-in-out transform hover:scale-110 hover:bg-green-600 hover:underline hover:text-white ${
                        isActive(`/logforme/${id}`) || isActive(`/logforme/${id}/addproject`) || isActive(`/logforme/${id}/addskill`) || isActive(`/logforme/${id}/adddocument`) ? "bg-blue-500 border-white" : "bg-none border-green-500 "
                        }`} href={`/logforme/${id}`}>LogForMe</Link>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
}