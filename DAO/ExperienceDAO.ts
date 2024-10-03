import { SkillDAO } from "./SkillDAO"

export type ExperienceDAO = {
    id: number,
    company: string,
    currently_employed: boolean,
    start_date: `${number}-${number}-${number}`,
    end_date: `${number}-${number}-${number}`,
    role: string,
    description: string,
    skills: SkillDAO[]
}