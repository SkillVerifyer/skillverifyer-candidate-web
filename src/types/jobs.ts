export type Job = {
  id: string
  company: string
  title: string
  location: string // e.g. "Remote"
  type: string // e.g. "Full-time"
  salaryMin: number
  salaryMax: number
  currency?: string
  summary: string
  responsibilities?: string[]
  requirements?: string[]
}

export type JobCardProps = {
  job: Job
  applied?: boolean
  onApply?: (jobId: string) => void | Promise<void>
}