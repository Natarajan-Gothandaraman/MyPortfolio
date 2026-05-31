import React from 'react';
import AboutSections from "./AboutSections.jsx"

export default function About() {
    return (
        <section id="about" className="text-white pt-20 px-4">
            <div className='md:flex items-center gap-8 pb-5 md:pt-10 lg:pt-16'>
                <div className='md:w-1/3 pb-5 pt-10 md:py-0'>
                    <h1 className='text-4xl font-bold text-orange-500'>About Me</h1> {/* Changed color here */}
                </div>
                <div className="md:w-2/3">
                    <p className="pb-3 text-slate-300">
                        Hello! I'm Natarajan Gothandaraman, a Full-Stack Developer with a passion for building responsive and user-friendly web applications. I specialize in a range of technologies including React, Node.js, Spring Boot, and MySQL.
                    </p>
                    <p className="text-slate-300">
                        I have a strong foundation in Java and Data Structures & Algorithms, demonstrated by solving over 300+ Problems on LeetCode, and I thrive on tackling complex challenges to create efficient, scalable solutions.
                    </p>
                </div>
            </div>
            <AboutSections />
        </section >
    )
}
