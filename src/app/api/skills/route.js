import { connectMongoDB } from "@/lib/mongodb";
import Skills from "@/models/skill";

/** Create Skill */
export async function POST(req) {
    await connectMongoDB();
    const { section, skills, ranges} = await req.json();

    try {
        const newSkill = new Skills({ section, skills, ranges });
        await newSkill.save();
        return new Response(JSON.stringify(newSkill), { status: 201 });
    } catch (error) {
        return new Response("Failed to create skill", { status: 500 });
    }
}

/** Read Skill */
export async function GET(req) {
    await connectMongoDB();
    try {
        const skills = await Skills.find();
        return new Response(JSON.stringify(skills), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch skills", { status: 500 });
    }
}

/** Update Skill */
export async function PUT(req) {
    await connectMongoDB();
    const { id, section, skills, ranges } = await req.json();

    try {
        const updatedSkill = await Skills.findByIdAndUpdate(id, { section, skills, ranges }, { new: true });
        return new Response(JSON.stringify(updatedSkill), { status: 200 });
    } catch (error) {
        return new Response("Failed to update skill", { status: 500 });
    }
}