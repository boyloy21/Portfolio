import { connectMongoDB } from "@/lib/mongodb";
import Project from "@/models/project";

/** Create Project */
export async function POST(req) {
  await connectMongoDB();
  const { title, description, list, link, linkName, image, video } = await req.json();

  try {
    const newProject = new Project({
      title,
      description,
      list,
      link,
      linkName,
      image,
      video,
    });
    await newProject.save();
    return new Response(JSON.stringify(newProject), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to create project" }), {
      status: 500,
    });
  }
}

/** Read Project */
export async function GET() {
  await connectMongoDB();

  try {
    const projects = await Project.find();
    return new Response(JSON.stringify(projects), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch projects" }), {
      status: 500,
    });
  }
}


