import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
    section: { type: String, required: true },
    skills: [{ type: String, required: true }],
    ranges: [{ type: Number, required: false }], // Optional for sections without ranges
});

const Skills = mongoose.models.Skill || mongoose.model("Skill", SkillSchema);
export default Skills;
