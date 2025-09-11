import React from 'react';

const achievementsData = [
  {
    title: "LeetCode Problem Solving",
    description: "Solved 500+ problems on LeetCode, mastering techniques from brute force to optimal solutions.",
    date: "Ongoing",
    link: "https://leetcode.com/u/natarajandeveloper/",
  },
  {
    title: "Full Stack Java Development and SQL",
    description: "Successfully completed a full-stack web development and SQL course from Simplilearn with certification.",
    date: "June 2025",
  },
  {
    title: "Academic Proficiency Award",
    description: "Awarded 1st prize for academic proficiency during 2018–19 and 2019–20 at K.S.G College of Arts and Science, Coimbatore.",
    date: "2018 & 2019",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="md:pt-20 px-4 mt-20">
      <h2 className="text-4xl font-bold text-orange-500 text-center mb-8 pt-2">Achievements</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((achievement, idx) => (
          <div
            key={idx}
            className="border border-gray-600 hover:border-[#00ffff] p-5 rounded-lg text-white hover:scale-105 transform transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
            <p className="text-sm text-orange-500 mb-2">{achievement.date}</p>
            <p className="text-gray-300">{achievement.description}</p>
            {achievement.link && (
              <div className='pt-4'>
                <a href={achievement.link} target='_blank' rel="noopener noreferrer" className='text-[#00ffff] hover:text-orange-500 transition-colors'>
                  View Credential
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
