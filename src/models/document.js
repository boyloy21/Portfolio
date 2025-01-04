import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    driveLink: { type: String, required: true },
});

const Document = mongoose.models.Document || mongoose.model("Document", DocumentSchema);
export default Document;