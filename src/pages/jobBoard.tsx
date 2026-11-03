import { JobCard } from "@/components/JobVacancies/JobCard";
import { JobFilters } from "@/components/JobVacancies/JobFilters";
import { Job, JobFilterValues } from "@/types/jobs";

export default function JobBoard() {

    const jobs: Job[] = [
      {
        id: "1",
        company: "Company Name",
        title: "Intern Full-Stack Engineer",
        location: "Remote",
        type: "Full-time",
        salaryMin: 30000,
        salaryMax: 50000,
        summary:
          "Own end-to-end features on production Next.js applications used by thousands of users daily. Work closely with clients and our design lead.",
        responsibilities: [
          "Build and ship features across the Next.js frontend and Node.js backend",
          "Review designs with the design lead and turn them into working UI",
        ],
        requirements: ["React and TypeScript", "Basic SQL knowledge"],
      },
      {
        id: "2",
        company: "Company Name",
        title: "Frontend Developer",
        location: "Remote",
        type: "Full-time",
        salaryMin: 50000,
        salaryMax: 80000,
        summary:
          "Own end-to-end features on production Next.js applications used by thousands of users daily. Work closely with clients and our design lead.",
        responsibilities: [
          "Own frontend features from planning to production",
          "Keep the UI accessible, fast and consistent",
        ],
        requirements: ["2+ years with React", "Experience with Next.js"],
      },
    ];
    
  return (
    <div className="gap-4 flex flex-col md:gap-4">
      {/* Header */}
      <div className="flex flex-col">
        <span className="text-large text-primary font-bold">
          Find your next role
        </span>
        <span className="text-medium text-secondary">
          Roles ranked by how closely they match your verified skills and experience.
        </span>
      </div>

      <JobFilters values={{
        search: "",
        employmentType: "all",
        location: "",
        category: ""
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      }} onChange={function (_values: JobFilterValues): void {
        throw new Error("Function not implemented.");
      } } locations={[]} categories={[]} />

      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}

    </div>
  );
}