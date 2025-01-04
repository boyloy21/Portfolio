import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    list : [{type: String, required: true}], // For lists
    link : [{type: String, required: true}], // For links
    linkName : [{type: String, required: true}], // For links names
    image : [{type: String, required: true}], // For images
    video : [{type: String, required: true}], // For videos
    createdAt: { type: Date, default: Date.now },
});

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
