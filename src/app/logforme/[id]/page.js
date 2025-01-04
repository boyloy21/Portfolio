"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Loading from "@/components/loading";

export default function Logforme() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const id = session?.user?.id;

    useEffect(() => {
        if (status === "loading") return;
        if (!session || !session.user.isAdmin) {
            alert("Access denied. Admins only.");
            router.push("/login");
        }
    }, [session, status, router]);

    if (status === "loading") {
        return (
            <Loading />
        );
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-stone-700 text-white">
            <h1 className="text-5xl text-blue-600 font-bold py-6 text-center mb-10">
                Welcome, {session?.user?.username}! 
            </h1>
            
            <div className="flex flex-col gap-4 text-center">
                <NavButton href={`/logforme/${id}/addskill`}>Add Skill</NavButton>
                <NavButton href={`/logforme/${id}/addproject`}>Add Project</NavButton>
                <NavButton href="/logforme/adddocument">Add Document</NavButton>
            </div>
        </div>
    );
}

function NavButton({ href, children }) {
    return (
        <Link href={href} className="text-3xl font-semibold hover:text-blue-400 transition duration-300">
            <button className="px-6 py-3 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700">
                {children}
            </button>
        </Link>
    );
}
