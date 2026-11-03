import { Job } from "./jobs";

export interface Profile {
  profileImage: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  skills: string[];
  education: string;
  certifications: string[];
  languages: string[];
  projects: string[];
  achievements: string[];
  cv: string;
}

export type AccountId = "github" | "freelancer"

export type Account = {
  id: AccountId
  name: string
  description: string
  connected: boolean
}

export type ConnectAccountsCardProps = {
  title?: string
  description?: string
  accounts?: Account[]
  onConnect?: (id: AccountId) => void | Promise<void>
}

export type CvUploadCardProps = {
  initialFileName?: string
  onUpload?: (file: File) => void | Promise<void>
}

export type Skill = { name: string; verified: boolean }

export type Education = {
  degree: string
  institution: string
  period: string
}
export type Experience = {
  title: string
  company?: string
  period: string
  current?: boolean
}

export type ExtractedDataCardProps = {
  skills: Skill[]
  education: Education[]
  experience: Experience[]
  onSkillAdd?: (name: string) => void
  onEditEducation?: () => void
  onEditExperience?: () => void
}

export type ProfileHeaderCardProps = {
  name: string;
  role: string;
  skillCount: number;
  profileScore: number;
  avatarUrl?: string;
  email?: string;
  phone?: number;
};

export type RecommendedPositionsProps = {
  jobs: Job[]
  viewAllHref?: string
  onApply?: (jobId: string) => void | Promise<void>
}