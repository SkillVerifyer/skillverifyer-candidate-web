import { ChevronRight } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RecommendedPositionsProps } from "@/types/profile"
import { JobCard } from "../JobVacancies/JobCard"



export function RecommendedPositions({
  jobs,
  viewAllHref = "/jobs",
  onApply,
}: RecommendedPositionsProps) {
  return (
    <Card className="gap-5">
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div className="space-y-1">
          <CardTitle className="text-medium font-semibold">
            Recommended positions
          </CardTitle>
          <CardDescription className="text-profile-caption">
            Roles that match your verified skills and experience.
          </CardDescription>
        </div>
        <a
          href={viewAllHref}
          className="flex items-center text-small font-medium hover:underline"
        >
          View all jobs
          <ChevronRight className="size-3.5" />
        </a>
      </CardHeader>

      <CardContent className="space-y-4">
        {jobs.length === 0 ? (
          <p className="py-6 text-center text-small text-muted-foreground">
            No matching roles yet. Add more skills to improve your matches.
          </p>
        ) : (
          jobs.map((job) => (
            <JobCard key={job.id} job={job} onApply={onApply} />
          ))
        )}
      </CardContent>
    </Card>
  )
}