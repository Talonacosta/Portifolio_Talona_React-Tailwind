import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGit, FaPaintBrush, FaCode } from 'react-icons/fa';

const Skills = () => {
  const skillsData = [
    { icon: FaHtml5, name: 'HTML' },
    { icon: FaCss3, name: 'CSS' },
    { icon: FaJs, name: 'JavaScript' },
    { icon: FaGit, name: 'Git' },
    { icon: FaReact, name: 'React' },
    { icon: FaCode, name: 'tailwind' },
    { icon: FaNodeJs, name: 'Node.js' },
    { icon: FaPaintBrush, name: 'Figma' }, 
  ];

  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <h2 className="mb-4 text-center text-2xl font-bold text-purple-500 md:mb-6 lg:text-3xl">
        Minhas Skills
      </h2>
      <div className="flex flex-wrap justify-center mt-12">
        {skillsData.map(({ icon: Icon, name }, index) => (
          <div key={index} className="text-center mx-2 my-2 w-24">
            <div className="w-24 h-24 bg-white border-2 border-black rounded-full flex items-center justify-center">
              <Icon color='#9400FF' size={45} />
            </div>
            <div className="mt-2 font-poppis text-xl">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
