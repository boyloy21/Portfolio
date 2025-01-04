'use client';
import { useState } from "react";
import Link from "next/link";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    list: [],
    link: [],
    linkName: [],
    image: [],
    video: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/projects", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Project created successfully!");
      setFormData({ title: "", description: "", list: [], link: [], linkName: [], image: [], video: [] });
    } else {
      alert("Failed to create project.");
    }
  };

  const addItem = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const updateItem = (field, index, value) => {
    const updatedField = [...formData[field]];
    updatedField[index] = value;
    setFormData({ ...formData, [field]: updatedField });
  };

  return (
    <div className="w-full mx-auto p-6 bg-stone-700 rounded-lg shadow-lg">
      <FontAwesomeIcon icon={faArrowLeft} className="h-10 w-10 text-2xl cursor-pointer" onClick={() => history.back()} />
      <h1 className="text-3xl font-semibold text-center text-green-600 mb-8">Create New Project</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Input */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">Title</label>
          <input
            type="text"
            placeholder="Enter project title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 text-black"
          />
        </div>

        {/* Description Input */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">Description</label>
          <textarea
            placeholder="Enter project description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
            className="w-full text-black p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600"
            rows="4"
          />
        </div>

        {/* List, Link, Image, and Video Fields */}
        {["list", "link", "linkName", "image", "video"].map((field) => (
          <div key={field}>
            <h4 className="text-2xl font-semibold text-white mb-4">{field.charAt(0).toUpperCase() + field.slice(1)}</h4>
            {formData[field].map((item, index) => (
              <div key={index} className="flex items-center space-x-4 mb-3">
                <input
                  type="text"
                  placeholder={`Enter ${field}`}
                  value={item}
                  onChange={(e) => updateItem(field, index, e.target.value)}
                  required
                  className="w-full text-black p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => addItem(field)}
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 mt-4"
            >
              Add {field}
            </button>
          </div>
        ))}

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
}
