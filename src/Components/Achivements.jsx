// import React from 'react';

// export default function Achivements() {
//     return (
//         <section id="achivements" className="md:h-screen flex flex-col items-center justify-center">
//             <h1 className="text-4xl font-bold text-white">Achivements Section</h1>
//         </section>
//     )
// }

import React from 'react';

export default function Achievements() {
  const achievements = [
    {
      title: "LeetCode Problem Solving",
      description: "Solved 500+ problems on LeetCode, mastering techniques from brute force to optimal solutions.",
      date: "2025",
      link: "https://leetcode.com/",
    },
    {
      title: "🎓Full stack java development and SQL (simplilearn)",
      description: "Successfully completed SQL And full-stack web development course with a certification.",
      date: "june-2025",
    },
    {
      title: "🥇Academic Proficiency",
      description: "Awarded 1st prize for academic proficiency during 2018–19 and 2019–20 in k.s.g college of arts and science, Coimbatore",
      date: "2018 and 2019",
    },
  ];

  return (
    <section id="achivements" className="md:pt-16 px-4">
      <h2 className="text-4xl font-bold text-[#00ffff] text-center mb-5 pt-2">Achievements</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, idx) => (
          <div
            key={idx}
            className="border border-gray-600 hover:border-[#00ffff] p-5 rounded text-white hover:scale-105 transform transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
            <p className="text-sm text-orange-500 mb-2">{achievement.date}</p>
            <p className="text-gray-300">{achievement.description}</p>
            {
                achievement?.link && <div className='pt-3'><a href={achievement.link} target='_blank' className='text-[#00ffff] hover:text-orange-500' >View</a></div>
            }
          </div>
        ))}
      </div>
    </section>
  );
}
