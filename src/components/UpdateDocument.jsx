'use client';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function UpdateDocument () {
    const [documents, setDocuments] = useState({title: "", description: "", image: "", driveLink: ""})

    const AddDocument = async () => {
        const response = await fetch("/api/documents", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: documents.title,
                description: documents.description,
                image: documents.image,
                driveLink: documents.driveLink
            }),
        });
        const data = await response.json();
        setDocuments({title: "", description: "", image: "", driveLink: ""})
    }

    const handlerClear = () => {
        setDocuments({title: "", description: "", image: "", driveLink: ""})
    }

    return (
        <div className="w-full h-screen bg-stone-700 mx-0">
            <div className="flex flex-col text-white font-bold mx-8 my-0">
            <FontAwesomeIcon icon={faArrowLeft} className="h-10 w-10 text-2xl cursor-pointer mt-4" onClick={() => history.back()} />
                <h1 className="text-5xl text-center text-blue-600 font-bold py-4 ">Push Document</h1>
                <div className="pt-6 w-full">  
                    <h1 className="text-3xl ">Title</h1>
                    <input type="text" value={documents.title} className="text-black w-96 h-12 border-2 rounded-lg p-2 text-xl mb-4" onChange={(e) => setDocuments({...documents, title: e.target.value})} />
                    <h1 className="text-3xl">Description</h1>
                    <input type="text" value={documents.description} className="text-black w-96 h-12 border-2 rounded-lg p-2 text-xl mb-4" onChange={(e) => setDocuments({...documents, description: e.target.value})} />
                    <h1 className="text-3xl ">Image</h1>
                    <input type="text" value={documents.image} className="text-black w-96 h-12 border-2 rounded-lg p-2 text-xl mb-4" onChange={(e) => setDocuments({...documents, image: e.target.value})} />
                    <h1 className="text-3xl">Drive Link</h1>
                    <input type="text" value={documents.driveLink} className="text-black w-96 h-12 border-2 rounded-lg p-2 text-xl mb-4" onChange={(e) => setDocuments({...documents, driveLink: e.target.value})} />
                </div>

                <div className="pt-6 mb-10 flex flex-row gap-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={AddDocument}>Add Document</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4" onClick={handlerClear}>Clear</button>
                </div>
            </div>
        </div>
    )
}