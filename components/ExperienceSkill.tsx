import { SkillDAO } from '@/DAO/SkillDAO';
import React from 'react'

interface Props {
  skills: SkillDAO[]
}

const ExperienceSkill = ({skills}: Props) => {
  return (
    <div className='text-white'>
      <p className='relative font-primary pt-[3.5rem] pb-[1rem] pl-[1rem] text-3xl font-bold uppercase'>skills</p>
      <div className='flex flex-col w-full pl-[1rem]'>
      {
        skills.map((skill, i) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <span key={i} className='flex h-[2rem] w-full mb-[1rem] bg-gray-500 uppercase rounded-2xl'>
              <span key={i} 
                className={`flex w-[${skill.score * 20}%] h-full bg-[#ffa000] rounded-2xl indent-4 items-center text-sm`}
              >
                {skill.name}
              </span>
            </span>
          );
        })
      }
      </div>
    </div>
  )
}

export default ExperienceSkill