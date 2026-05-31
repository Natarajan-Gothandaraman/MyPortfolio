import React, { useState } from 'react';

const TABS = {
    EDUCATION: 'education',
    SKILLS: 'skills',
};

const TabButton = ({ id, label, activeTab, onClick }) => (
    <li>
        <button
            onClick={() => onClick(id)}
            className={`relative group p-1 transition-colors duration-300 ${activeTab === id ? 'text-orange-500' : 'hover:text-orange-400'}`}
        >
            {label}
            <span
                className={`absolute left-0 bottom-0 h-0.5 bg-orange-500 transition-all duration-300 ${activeTab === id ? 'w-full' : 'w-0 group-hover:w-full'}`}
            ></span>
        </button>
    </li>
);

export default function AboutSections() {
    const [activeTab, setActiveTab] = useState(TABS.EDUCATION);

    return (
        <>
            <ul className='flex space-x-6 pb-4 border-b border-gray-700 mb-6'>
                <TabButton id={TABS.EDUCATION} label="Education" activeTab={activeTab} onClick={setActiveTab} />
                <TabButton id={TABS.SKILLS} label="Skills" activeTab={activeTab} onClick={setActiveTab} />
            </ul>

            <div>
                {activeTab === TABS.EDUCATION && <EducationSection />}
                {activeTab === TABS.SKILLS && <SkillsSection />}
            </div>
        </>
    );
}

const EducationSection = () => (
    <ul className="list-none space-y-4">
        {[
            { degree: "Master of Computer Application", college: "Erode Sengunthar Engineering College, Erode | Graduation: April-2022", grade: "CGPA: 9.10/10" },
            { degree: "Bachelor of Mathematics with Computer Application", college: "K.S.G College of Arts and Science, Coimbatore | Graduation: Jun 2017 - April 2020", grade: "CGPA: 7.70/10" },
            { degree: "HSC (12th)", college: "Government Higher Secondary school, Mangalam, Tiruppur | Jun 2016 - Apr 2017", grade: "Grade: 81%" },
            { degree: "SSLC (10th)", college: "Government Higher Secondary school, Mangalam, Tiruppur | Jun 2014 - Apr 2015", grade: "Grade: 93%" }
        ].map(edu => (
            <li key={edu.degree} className="border border-gray-700 rounded-lg p-4 cursor-pointer hover:bg-[#212425] hover:border-cyan-400 transition-all duration-300">
                <h3 className="font-semibold text-lg">{edu.degree}</h3>
                <p className="text-gray-400">{edu.college}</p>
                <p className="text-gray-500">{edu.grade}</p>
            </li>
        ))}
    </ul>
);

const SkillsSection = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
            { title: "Frontend", skills: "HTML, CSS, React, TailwindCSS, Bootstrap" },
            { title: "Backend", skills: "Node.js, Spring Boot, RESTful APIs" },
            { title: "Database", skills: "MySQL" },
            { title: "Support Tools", skills: "Git/GitHub, VS Code, Postman, Vite, Vercel, Eclipse" },
            { title: "Languages", skills: "JavaScript, Java, C" },
            { title: "Problem Solving", skills: "Data Structures and Algorithms" }
        ].map(skill => (
            <div key={skill.title} className="border border-gray-700 rounded-lg text-center p-4 cursor-pointer hover:bg-[#212425] hover:border-cyan-400 transition-all duration-300">
                <h3 className="font-semibold">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.skills}</p>
            </div>
        ))}
    </div>
);