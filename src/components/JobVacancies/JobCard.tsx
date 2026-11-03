import { useState } from "react"
import { Banknote, ChevronDown, Clock, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { JobCardProps } from "@/types/jobs"

const money = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export function JobCard({ job, applied = false, onApply }: JobCardProps) {
  const [open, setOpen] = useState(false)
  const [isApplied, setIsApplied] = useState(applied)
  const [pending, setPending] = useState(false)

  const hasDetails = Boolean(
    job.responsibilities?.length || job.requirements?.length,
  )

  async function handleApply() {
    setPending(true)
    try {
      await onApply?.(job.id)
      setIsApplied(true)
    } finally {
      setPending(false)
    }
  }

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="rounded-md border bg-card p-4"
    >
      {/* Company + Apply */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="size-5 rounded-sm bg-muted-foreground/40" />
          <span className="text-small font-semibold">{job.company}</span>
        </div>
        <Button
          size="sm"
          className="h-7 bg-btn-primary px-6 text-small hover:bg-btn-primary-hover"
          disabled={isApplied || pending}
          onClick={handleApply}
        >
          {isApplied ? "Applied" : "Apply"}
        </Button>
      </div>

      <h3 className="mt-3 text-small font-semibold">{job.title}</h3>

      <div className="mt-2 flex flex-wrap gap-2">
        <Meta icon={MapPin}>{job.location}</Meta>
        <Meta icon={Clock}>{job.type}</Meta>
        <Meta icon={Banknote}>
          {job.currency ?? "LKR"} {money.format(job.salaryMin)} -{" "}
          {money.format(job.salaryMax)}
        </Meta>
      </div>

      <p className="mt-3 text-small text-muted-foreground">{job.summary}</p>

      {hasDetails && (
        <>
          <CollapsibleContent className="mt-3 space-y-3 border-t pt-3 text-small">
            {job.responsibilities && job.responsibilities.length > 0 && (
              <DetailList title="Responsibilities" items={job.responsibilities} />
            )}
            {job.requirements && job.requirements.length > 0 && (
              <DetailList title="Requirements" items={job.requirements} />
            )}
          </CollapsibleContent>

          <CollapsibleTrigger className="mt-2 flex items-center gap-1 text-small text-muted-foreground hover:text-foreground">
            {open ? "Hide full role" : "View full role"}
            <ChevronDown
              className={`size-3 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </CollapsibleTrigger>
        </>
      )}
    </Collapsible>
  )
}

function Meta({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <Badge
      variant="outline"
      className="gap-1.5 rounded-md px-2 py-0.5 text-small font-normal"
    >
      <Icon className="size-3 text-muted-foreground" />
      {children}
    </Badge>
  )
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-1 font-semibold">{title}</p>
      <ul className="list-disc space-y-1 pl-4 text-muted-foreground text-small">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}