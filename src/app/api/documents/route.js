import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Document from "@/models/document";

export async function POST(req) {
    
    try {
        await connectMongoDB();
        const { title, description, image, driveLink } = await req.json();
        const newDocument = new Document({ title, description, image, driveLink });
        await newDocument.save();
        return NextResponse.json(
            { success: true, message: "Document created successfully"},
            { status: 201 },
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Failed to create document"},
            { status: 500 },
        );
    }
};

export async function GET(req) {
    try {
        await connectMongoDB();
        const documents = await Document.find();
        return NextResponse.json(
            { success: true, documents },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Failed to fetch documents", error: error.message },
            { status: 500 },
        );
    }
};