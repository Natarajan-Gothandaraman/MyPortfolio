import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="md:pt-20 px-4 mt-20">
            <h2 className="text-4xl font-bold text-orange-500 text-center mb-8 pt-2">Experience</h2> {/* Changed color here */}
            <div className='space-y-4 md:w-3/4 mx-auto'>
                <div className="border border-gray-700 rounded-lg p-4 hover:bg-[#212425] cursor-pointer hover:border-cyan-400 transition-all duration-300">
                    <h1 className="font-bold text-xl mb-3">Microzant Technologies</h1>
                    <h3 className="font text-l mb-1">System Analyst - EDI Analyst</h3>
                    <p className="text-gray-400 text-sm mb-3">May 2022 – Jan 2023</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 text-base leading-relaxed">
                        <li>Oversaw daily EDI transactions and performed troubleshooting, maintaining a <span className="font-semibold text-cyan-400">99% uptime</span> for critical data exchange channels.</li>
                        <li>Implemented an automated monitoring system for EDI activities, cutting down response time for anomalies by <span className="font-semibold text-cyan-400">40%</span>.</li>
                        <li>Utilized Azure Logic Apps to streamline cloud-based workflows, improving productivity by <span className="font-semibold text-cyan-400">20%</span>.</li>
                        <li>Provided developer support for AS2 communication protocols, leading to smoother partnerships with key vendors.</li>
                        <li>Managed the transition from legacy systems to an Azure/Logic Apps environment, enhancing scalability and future readiness.</li>
                    </ul>
                </div>
                {/* You can duplicate this block to add another experience entry */}
                <div className="border border-gray-700 rounded-lg p-4 hover:bg-[#212425] cursor-pointer hover:border-cyan-400 transition-all duration-300">
                    <h3 className="font-bold text-xl mb-1">Freelance Full-Stack Developer</h3>
                    <p className="text-gray-400 text-sm mb-3">Self-employed • Jun 2025 - Present</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 text-base leading-relaxed">
                        <li>Developed and deployed real-time MERN stack projects with secure authentication, payments, and scalable architecture.</li>
                        <li>Deployment via Vercel & Render</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;