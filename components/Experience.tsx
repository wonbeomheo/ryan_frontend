import React, { useEffect, useState } from 'react'
import ExperienceItem from './ExperienceItem'
import ExperienceSkill from './ExperienceSkill'
import axios from 'axios'
import { ExperienceDAO } from '@/DAO/ExperienceDAO'
import moment from 'moment'

const Experience = () => {
    const [experienceList, setExperienceList] = useState<ExperienceDAO[] | null>();
    const [errorMessage, setErrorMessage] = useState();
    useEffect(() => {
        axios.get(
            'http://127.0.0.1:8000/api/experiences'
        ).then(
            (response) => {
                setExperienceList(response.data)
            }
        ).catch(
            (error) => {
                setErrorMessage(error.error)
                console.log(errorMessage);
                
            }
        )
        }, [])
  return (
    <div className='bg-[#1a0000] pb-[4rem] pt-[4rem] md:pt-[8rem]'>
        <p className='heading'>
            experience
        </p>
        <div className='w-[80%] mx-auto pt-[2rem] gap-[2rem] items-center'>
                {experienceList ? experienceList.map((experience, i) => {
                    const start_date = moment(experience.start_date).format('YYYY MMMM');
                    const end_date = moment(experience.end_date).format('YYYY MMMM');

                    // eslint-disable-next-line react/jsx-key
                    return (<div key={i} className='grid grid-cols-2'>
                    <ExperienceItem 
                        company={experience.company} 
                        start_date={start_date} 
                        end_date={end_date} 
                        role={experience.role}
                        description={experience.description}
                    />
                    <ExperienceSkill skills={experience.skills}/>
                        </div>
                    );
                }) : null}
        </div>
    </div>
  )
}

export default Experience