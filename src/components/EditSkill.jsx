'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function SkillComponent() {
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState({ section: "", skills: "", ranges: "" });
    const [editSkill, setEditSkill] = useState(null); // Skill to edit


    useEffect(() => {
        const fetchSkills = async () => {
            const response = await fetch("/api/skills");
            const skills = await response.json();
            setSkills(skills);
            console.log(skills);
        };

        fetchSkills();
    }, []);

    const addSkill = async () => {
        // Add skill logic here
        const response = await fetch("/api/skills", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                section: newSkill.section,
                skills: newSkill.skills.split(","),
                ranges : newSkill.ranges ? newSkill.ranges.split(",").map(Number) : [],
            }),
        });
        const data = await response.json();
        setSkills([...skills, data]); // Update the skill list
        setNewSkill({ section: "", skills: "", ranges: "" }); // Reset the form
    };

    const updateSkill = async (id) => {
        // Update skill logic here
        const response = await fetch("/api/skills", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                id,
                section: editSkill.section,
                skills: editSkill.skills.split(","),
                ranges : editSkill.ranges ? editSkill.ranges.split(",").map(Number) : [],
            }),
        });

        const updatedSkill = await response.json(); 
        setSkills(skills.map((skill) => (skill._id === id ? updatedSkill : skill)));
        setEditSkill(null);
    };

    return (
        <div className="p-8 bg-stone-700 text-gray-200 w-full h-full">
            <div className="p-4">
            <FontAwesomeIcon icon={faArrowLeft} className="h-10 w-10 text-2xl cursor-pointer" onClick={() => history.back()} />
            <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">Update Skill</h1>

            {/* Add Skill Section */}
            <div className="mb-4 flex flex-col space-y-4">
                <h2 className="text-lg font-semibold">Add a New Skill</h2>
                <input
                    className="border p-2 mr-2 text-black rounded-lg w-56"
                    type="text"
                    placeholder="Section"
                    value={newSkill.section}
                    onChange={(e) => setNewSkill({ ...newSkill, section: e.target.value })}
                />
                <input
                    className="border p-2 mr-2 text-black rounded-lg w-96"
                    type="text"
                    placeholder="Skills (comma-separated)"
                    value={newSkill.skills}
                    onChange={(e) => setNewSkill({ ...newSkill, skills: e.target.value })}
                />
                <input
                    className="border p-2 mr-2 text-black rounded-lg w-96"
                    type="text"
                    placeholder="Ranges (optional, comma-separated)"
                    value={newSkill.ranges}
                    onChange={(e) => setNewSkill({ ...newSkill, ranges: e.target.value })}
                />
                <button className="bg-blue-500 text-white p-2 w-28 hover:bg-blue-600 rounded-lg text-xl font-bold" onClick={addSkill}>
                    Add Skill
                </button>
            </div>

            {/* List of Skills */}
            <ul className="list-disc pl-5">
                {skills.map((skill) => (
                    <li key={skill._id} className="mb-2">
                        <div>
                            <strong>{skill.section}</strong>: {skill.skills.join(", ")}
                            {skill.ranges && skill.ranges.length > 0 && (
                                <span> (Ranges: {skill.ranges.join(", ")})</span>
                            )}
                            <button
                                className="p-2 w-16 ml-4 text-blue-500 border-2 border-white bg-white rounded-lg hover:bg-blue-500 hover:text-white"
                                onClick={() => setEditSkill(skill)}
                            >
                                Edit
                            </button>
                        </div>

                        {/* Edit Skill Section */}
                        {editSkill && editSkill._id === skill._id && (
                            <div className="mt-2">
                                <input
                                    className="border p-2 mr-2 text-black"
                                    type="text"
                                    value={editSkill.section}
                                    onChange={(e) =>
                                        setEditSkill({ ...editSkill, section: e.target.value })
                                    }
                                />
                                <input
                                    className="border p-2 mr-2 text-black"
                                    type="text"
                                    value={editSkill.skills}
                                    onChange={(e) =>
                                        setEditSkill({ ...editSkill, skills: e.target.value })
                                    }
                                />
                                <input
                                    className="border p-2 mr-2 text-black"
                                    type="text"
                                    value={editSkill.ranges}
                                    onChange={(e) =>
                                        setEditSkill({ ...editSkill, ranges: e.target.value })
                                    }
                                />
                                <button
                                    className="bg-green-500 text-white p-2"
                                    onClick={() => updateSkill(skill._id)}
                                >
                                    Save
                                </button>
                                <button
                                    className="ml-2 bg-gray-500 text-white p-2"
                                    onClick={() => setEditSkill(null)}
                                >
                                    Cancel
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
}
