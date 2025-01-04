"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // Prevent automatic redirection
    });

    if (result?.error) {
      alert(result.error);
    } else {
      const response = await fetch("/api/auth/session");
      const sessionData = await response.json();

      if (sessionData?.user?.isAdmin) {
        router.replace(`/logforme/${sessionData.user.id}`); // Redirect admins
      } else {
        router.replace("/"); // Redirect normal users
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="border p-2 w-full mb-3 rounded text-black"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="border p-2 w-full mb-3 rounded text-black"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
          >
            {showPassword ? "👁️" : "🙈"}
          </button>
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 w-full rounded">
          Login
        </button>
      </form>
    </div>
  );
}
