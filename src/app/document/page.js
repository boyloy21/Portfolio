'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Document() {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const fetchDocuments = async () => {
            const response = await fetch("/api/documents");
            const data = await response.json();
            setDocuments(data.documents);
        };

        fetchDocuments();
    }, []);

    return (
        <div className="w-full h-full bg-stone-700 mx-0">
            <div className="flex flex-col text-white font-bold mx-8 my-0">
                <h1 className="text-5xl text-center text-blue-600 font-bold py-4 ">Document Research</h1>
                {documents.map((doc, index) => (
                    <div key={index} className="pt-6 ">
                        <h1 className="text-3xl">{doc.title}</h1>
                        <h1 className="ml-5 text-xl">{doc.description}</h1>
                        <Link href={doc.driveLink} className="mx-8">
                            <Image
                                src={doc.image}
                                alt={doc.title}
                                width={300}
                                height={500}
                                className="shadow-xl shadow-blue-700 mx-10 transform hover:scale-110 transition-transform duration-75 ease-out mb-4"
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
