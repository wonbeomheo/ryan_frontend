import React from 'react'

interface Props {
    company: string,
    start_date: string,
    end_date: string,
    role: string,
    description: string
}

const ExperienceItem = ({company, start_date, end_date, role, description}:Props) => {
  return (
    <div className='text-white font-bold'>
        <div className='border-[#ffa000] border-solid border-4 w-[14rem] p-2 text-center rounded-xl'>
            {start_date ? start_date : null} - {end_date ? end_date : null}
        </div>
        <div className='text-4xl py-2 pl-4'>
            {company}
        </div>
        <div className='text-2xl pl-4 font-normal'>
            {role}
        </div>
        <div className="text-sm font-normal text-slate-300 py-2 pl-4">
            <ul>
                {description.split('\n').map((item, i) => {
                    // eslint-disable-next-line react/jsx-key
                    return (<li key={i} className='hyphens-auto text-justify pb-1 pl-2 -indent-2'>&#8226; {item}</li>)
                })}
            </ul>
        </div>
    </div>
  )
}

export default ExperienceItem