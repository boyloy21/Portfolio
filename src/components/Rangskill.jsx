'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
export default function Rangskill({skill, range}) {

    return (
        <div className="flex flex-col ml-5 mt-5">
            <div className="flex flex-row">
                <span className="text-bold text-2xl">{skill} : </span>
                <div className="flex w-64 rounded-full overflow-hidden h-8 border-4 border-cyan-300 ml-5">
                    <div
                        style={{ width: `${range}%` }}
                        className="bg-green-500 flex items-center justify-center"
                    >
                        <FontAwesomeIcon icon={faBolt} className="text-white text-lg mr-1"/>
                        <h1 className="text-white text-lg font-semibold">{range}%</h1>
                    </div>

                    {/* White section */}
                    <div
                        style={{ width: `${100-range}%` }}
                        className="bg-white flex items-center justify-center"
                    ></div>
                </div>
            </div>
        </div>
    )
}
