import React, { useState } from 'react';

export default function Skills() {
    const [selectedSectionId, setSelectedSectionId] = useState("user-education");

    const handleAboutSection = (e) => {
        let target = e.target;
        document.querySelector(`.${selectedSectionId}`).classList.add("hidden");
        document.querySelector(`.${target.id}`).classList.remove("hidden");
        document.getElementById(selectedSectionId).classList.remove("text-orange-500");
        document.getElementById(target.id).classList.add("text-orange-500");
        setSelectedSectionId(target.id);
    }
    return (
        <>
            <ul className='flex space-x-3 pb-3'>
                <li>
                    <button onClick={handleAboutSection} className="relative group p-1 text-orange-500" id='user-education' >
                        Education
                        <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:left-0 group-hover:w-full rounded" ></span>
                    </button>
                </li>
                <li>
                    <button onClick={handleAboutSection} className="relative group p-1" id='user-skills' >
                        Skills
                        <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:left-0 group-hover:w-full rounded" ></span>
                    </button>
                </li>
                <li>
                    <button onClick={handleAboutSection} className="relative group p-1" id='user-experience' >
                        Experience
                        <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:left-0 group-hover:w-full rounded" ></span>
                    </button>
                </li>
            </ul>

            <div className='user-education' >
                <ul className="list-none">
                    <li className="mb-4 border border-gray-700 rounded-lg p-4 cursor-pointer hover:bg-[#212425] hover:text-[#00ffff]">
                        <h3 className="font-semibold text-lg">Master of Computer Application</h3>
                        <p className="text-gray-400">Erode Sengunthar Engineering College, Erode| Graduation: April-2022</p>
                        <p className="text-gray-500"> CGPA 9.10/10</p>
                    </li>
                    <li className="mb-4 border border-gray-700 rounded-lg p-4 cursor-pointer hover:bg-[#212425] hover:text-[#00ffff]">
                        <h3 className="font-semibold text-lg">Bachelor of Mathematics with Computer Application</h3>
                        <p className="text-gray-400">K.S.G College of Arts and Science, Coimbatore| Graduation: Jun 2017 - April 2020</p>
                        <p className="text-gray-500"> CGPA 7.70/10</p>
                    </li>
                    <li className="mb-4 border border-gray-700 rounded-lg p-4 cursor-pointer hover:bg-[#212425] hover:text-[#00ffff]">
                        <h3 className="font-semibold text-lg">HSC (12th)</h3>
                        <p className="text-gray-400">Government Higher Secondary school,Mangalam,Tiruppur | Jun 2016- Apr 2017</p>
                        <p className="text-gray-500">Grade: 81%</p>
                    </li>
                    <li className="mb-4 border border-gray-700 rounded-lg p-4 cursor-pointer hover:bg-[#212425] hover:text-[#00ffff]">
                        <h3 className="font-semibold text-lg">SSLC (10th)</h3>
                        <p className="text-gray-400">Government Higher Secondary school,Mangalam,Tiruppur | Jun 2014 - Apr 2015</p>
                        <p className="text-gray-500">Grade: 93%</p>
                    </li>
                </ul>
            </div>

            <div className="user-skills hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border border-gray-700 rounded-lg text-center p-4 cursor-pointer hover:bg-[#212425] hover:text-[#00ffff]">
                    <h3 className="font-semibold">Frontend</h3>
                    <p className="text-gray-400 text-sm">HTML, CSS, React, TailwindCSS, Bootstrap</p>
                </div>
                <div className="border border-gray-700 rounded-lg text-center p-4 cursor-pointer hover:bg-[#212425] hover:text-[#00ffff]">
                    <h3 className="font-semibold">Backend</h3>
                    <p className="text-gray-400 text-sm">Node.js, Spring boot, RESTful APIs</p>
                </div>
                <div className="border border-gray-700 rounded-lg text-center p-4 cursor-pointer hover:bg-[#212425] hover:text-[#00ffff]">
                    <h3 className="font-semibold">Database</h3>
                    <p className="text-gray-400 text-sm">MySQL</p>
                </div>
                <div className="border border-gray-700 rounded-lg text-center p-4 cursor-pointer hover:bg-[#212425] hover:text-[#00ffff]">
                    <h3 className="font-semibold">Support Tools</h3>
                    <p className="text-gray-400 text-sm">Git/GitHub, VS Code, Postman, vite,vercel(deploy), Eclipse</p>
                </div>
                <div className="border border-gray-700 rounded-lg text-center p-4 cursor-pointer hover:bg-[#212425] hover:text-[#00ffff]">
                    <h3 className="font-semibold">Languages</h3>
                    <p className="text-gray-400 text-sm">C, JavaScript, Java</p>
                </div>
                <div className="border border-gray-700 rounded-lg text-center p-4 cursor-pointer hover:bg-[#212425] hover:text-[#00ffff]">
                    <h3 className="font-semibold">Problem Solving</h3>
                    <p className="text-gray-400 text-sm">Data Structures and Algorithms</p>
                </div>
            </div>

            <div className='user-experience hidden space-y-4'>
                <div className="border border-gray-700 rounded-lg p-4 hover:bg-[#212425] cursor-pointer hover:text-[#00ffff]">
                    <h3 className="font-semibold">Microzant Technologies</h3>
                    <p className="text-gray-400 text-sm">May 2022 – Jan 2023</p>
                    <p className="text-gray-300 text-sm">
                        <h5> • Oversaw daily edi transactions and performed troubleshooting, maintaining a 99% uptime for critical data exchange
channels.</h5>
 <h5> • Implemented an automated monitoring system for EDI activities, cutting down response time for anomalies by 40%.</h5>

<h5> • Utilized azure logic apps to streamline cloud-based workflows, improving productivity by 20%.</h5>

<h5> • Provided developer support for as2 communication protocols, leading to smoother partnerships with key vendors.</h5>

<h5> • Managed the transition from legacy systems to an azure/logic apps environment, enhancing scalability and future
readiness.</h5>

<h5> • Used jira for issue tracking and prepared daily reports.</h5>

<h5> • Participated in daily scrum meetings and production deployment.</h5>
                    </p>
                </div>
                
            </div>

        </>
    )
}