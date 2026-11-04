export type Job = {
  id: string;
  company: string;
  title: string;
  location: string; // e.g. "Remote"
  type: string; // e.g. "Full-time"
  salaryMin: number;
  salaryMax: number;
  currency?: string;
  summary: string;
  responsibilities?: string[];
  requirements?: string[];
};

export type JobCardProps = {
  job: Job;
  applied?: boolean;
  onApply?: (jobId: string) => void | Promise<void>;
};

export type EmploymentType =
  | "all"
  | "full-time"
  | "part-time"
  | "internship"
  | "remote"
  | "remote-internship";

export type JobFilterValues = {
  search: string;
  employmentType: EmploymentType;
  location: string; // "all" or a location name
  category: string; // "all" or a category name
};

export type JobFiltersProps = {
  values: JobFilterValues
  onChange: (values: JobFilterValues) => void
  locations: string[]
  categories: string[]
}