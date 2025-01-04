'use client';
import { useState, useEffect } from "react";
import Rangskill from "@/components/Rangskill";
import Loading from "@/components/loading";
export default function Skill() {
    const [skills, setSkills] = useState([]);

    // Fetch skills from API on component mount
    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await fetch("/api/skills" ,{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setSkills(data); // Update state with fetched skills
                }
                
            } catch (error) {
                console.error("Failed to fetch skills", error);
            }
        };

        fetchSkills();
    }, []);

    return (
        <div className="p-8 bg-stone-700 text-gray-200 w-full h-full">
            {/* Title */}
            <h1 className="text-5xl font-bold text-center mb-8 text-blue-600">My Skills</h1>
            {skills.length === 0 ? (
                // Show a loading message or fallback if no skills are available
                <Loading />
            ) : (
                skills.map((item, index) => (
                    <div key={index} className="mb-8 mt-4">
                        {/* Section Title */}
                        <h2 className="text-4xl font-bold text-green-600 mb-4">{item.section}</h2>

                        {/* Render each skill with its range */}
                        {item.skills.map((skill, skillIndex) => (
                            <Rangskill
                                key={skillIndex}
                                range={item.ranges ? item.ranges[skillIndex] : 0} // Handle undefined ranges
                                skill={skill}
                            />
                        ))}

                        {/* Divider */}
                        <hr className="border-2 border-x-neutral-500 mt-2 mr-4" />
                    </div>
                ))
            )}
        </div>
    );
}
