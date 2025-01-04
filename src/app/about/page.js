import Link from "next/link";
import Image from "next/image";
export default function About() {
    return (
        <div className="p-8 bg-stone-700 text-white">
            {/* Title */}
            <h1 className="text-5xl font-bold text-center mb-8 text-blue-600">About Me</h1>

            {/* Contact Information */}
            <div className="mb-8">
            <h2 className="text-4xl font-semibold text-gray-200 mb-4">Contact Information</h2>
            <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                        <span className="font-semibold mr-4">Email:</span>
                        <Link href="mailto:yinchheanyun@gmail.com" target="_blank" className="text-blue-500 hover:underline">
                            yinchheanyun@gmail.com
                        </Link>
                    </li>
                    <li>
                        <span className="font-semibold mr-4">GitHub:</span>
                        <Link href="https://github.com/boyloy21" target="_blank" className="text-blue-500 hover:underline">
                            github.com/boyloy21
                        </Link>
                    </li>
                    <li>
                        <span className="font-semibold mr-4">Telegram:</span>
                        <Link href="https://t.me/Yunjuly" target="_blank" className="text-blue-500 hover:underline">
                            t.me/Yunjuly
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Experience */}
            <div className="mb-8">
                <h2 className="text-4xl font-semibold text-gray-200 mb-4">Experience</h2>
                <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                        <span className="font-semibold">08/2023 - 11/2023:</span>{" "}
                        Internship at{" "}
                        <Link href="https://ai-farm.vercel.app/" target="_blank" className="text-blue-500 hover:underline">
                            AIFARM Robotics Factory
                        </Link>
                    </li>
                    <li>
                        <span className="font-semibold">12/2023 - 06/2024:</span> Member of ROBOCON-ITC01, leading the programming team
                    </li>
                    <li>
                        <span className="font-semibold">07/2024 - Present:</span>{" "}
                        Member of KAYVIKA, working on a website and mobile app for translating hand gestures to text and sound
                    </li>
                </ul>
            </div>

            {/* Certificates */}
            <div className="mb-8">
                <h2 className="text-4xl font-semibold text-gray-200 mb-4">Certificates</h2>
                <div className="flex flex-row space-x-6">
                    <div className="flex flex-col mt-8">
                        <Image src="/images/certifi3.jpg" alt="Certificate" width={580} height={200} className="transform hover:scale-110 hover:shadow-lg hover:shadow-red-500 transition-transform duration-75 ease-out mb-6"/>
                        <h3 className="text-lg font-semibold mb-2 text-center">Certificate from Internship at AIFARM </h3>
                    </div>
                    <div className="flex flex-col mt-8">
                        <Image src="/images/certifi2.jpg" alt="Certificate" width={580} height={200} className="transform hover:scale-110 hover:shadow-lg hover:shadow-red-500 transition-transform duration-75 ease-out mb-6"/>
                        <h3 className="text-lg font-semibold mb-2 text-center">Certificate from ROBOCON-ITC01 at ទទក</h3>
                    </div>
                    <div className="flex flex-col mt-8">
                        <Image src="/images/certifi1.jpg" alt="Certificate" width={580} height={150} className="transform hover:scale-110 hover:shadow-lg hover:shadow-red-500 transition-transform duration-75 ease-out mb-6"/>
                        <h3 className="text-lg font-semibold mb-2 text-center">Certificate from Comunity at Unipreneur</h3>
                    </div>
                </div>
                
            </div>

            {/* Resume */}
            <div className="mb-8">
                <h2 className="text-4xl font-semibold text-gray-200 mb-4">Education : </h2>
                <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>High School at Ponlok khmer in Poipet city : 2015-2020</li>
                    <li>Bachelor of Electrical Automation Engineering at Institute of Technology of Cambodia : 2020-2025</li>
                </ul>
            </div>

            {/* Hobbies */}
            <div>
                <h2 className="text-4xl font-semibold text-gray-200 mb-4">Hobbies</h2>
                <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Reaseaching new things</li>
                    <li>Sport : footbal, basketball, volleyball, pingpong, sketch board, guitar</li>
                    <li>Gym</li>
                    <li>Noting new Information</li>
                    <li>Listening music</li>
                </ul>
            </div>
        </div>
    );
}
