import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/chheanyun.jpg')", backgroundSize: "cover" }} // Replace with your image path
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center ">
          <h1 className="text-6xl font-bold text-blue-500 ">Hello! I&apos;m Chheanyun</h1>
          <p className="text-2xl">I&apos;m an engineering of Robotics and Automation and  focused only on Programming.</p>
        </div>
        
      </div>
      <div className="bg-stone-600">
        <h1 className="text-6xl font-bold text-blue-500 text-center py-4">Service</h1>
        <div className="flex flex-row justify-center ">
          <div className="mx-10">
            <h1 className="text-2xl font-bold text-blue-500 text-center pb-2">Develop Web and App</h1>
            <Image src="/images/web-app.jpeg" alt="web and app" width={300} height={800} className="shadow-xl shadow-slate-400 mx-10 transform hover:scale-110 hover:rotate-45 transition-transform duration-75 ease-out"/>
          </div>
          <div className="mx-10">
            <h1 className="text-2xl font-bold text-blue-500 text-center pb-2">Teach STM32 and ROS2</h1>
            <Image src="/images/teach_stm32_ros2.jpeg" alt="stm32" width={300} height={800} className="shadow-xl shadow-slate-400 mx-10 transform hover:scale-110 hover:rotate-45 transition-transform duration-75 ease-out"/>
          </div>
          <div className="mx-10">
            <h1 className="text-2xl font-bold text-blue-500 text-center pb-2">Get a Project Automation</h1>
            <Image src="/images/AI and Human.jpeg" alt="AI and Human" width={300} height={800} className="shadow-xl shadow-slate-400 mx-10 transform hover:scale-110 hover:rotate-45 transition-transform duration-75 ease-out"/>
          </div>
        </div>
      </div>
      <div className="bg-stone-600 h-10">

      </div>
    </>
  );
}