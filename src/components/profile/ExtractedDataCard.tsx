import { useState } from "react"
import { Briefcase, Code, GraduationCap, Plus } from "lucide-react"

import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Separator } from "../ui/separator"
import { ExtractedDataCardProps } from "@/types/profile"

export function ExtractedDataCard({
  skills: initialSkills,
  education,
  experience,
  onSkillAdd,
  onEditEducation,
  onEditExperience,
}: ExtractedDataCardProps) {
  const [skills, setSkills] = useState(initialSkills)
  const [adding, setAdding] = useState(false)
  const [draft, setDraft] = useState("")

  function commitSkill() {
    const name = draft.trim()
    const exists = skills.some((s) => s.name.toLowerCase() === name.toLowerCase())
    if (name && !exists) {
      setSkills((prev) => [...prev, { name, verified: false }])
      onSkillAdd?.(name)
    }
    setDraft("")
    setAdding(false)
  }

  return (
    <Card className="gap-4">
      <CardHeader className="gap-1">
        <CardTitle className="text-small font-semibold">Extracted Data</CardTitle>
        <CardDescription className="text-profile-caption">
          Review and refine the information found in your CV.
        </CardDescription>
      </CardHeader>
      <Separator />

      <CardContent className="space-y-5">
        {/* Technical skills */}
        <section className="space-y-3">
          <SectionTitle icon={Code}>Technical skills</SectionTitle>
          <div className="flex flex-wrap items-center gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className={
                  skill.verified
                    ? "bg-profile-verified-bg text-profile-verified-text hover:bg-profile-verified-bg"
                    : "bg-muted text-muted-foreground"
                }
              >
                {skill.name}
              </Badge>
            ))}

            {adding ? (
              <Input
                autoFocus
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onBlur={commitSkill}
                onKeyDown={(e) => {
                  if (e.key === "Enter") commitSkill()
                  if (e.key === "Escape") {
                    setDraft("")
                    setAdding(false)
                  }
                }}
                placeholder="Skill name"
                className="h-6 w-28 text-small"
              />
            ) : (
              <Button
                variant="outline"
                size="sm"
                className="h-6 rounded-full border-dashed px-2.5 text-small"
                onClick={() => setAdding(true)}
              >
                <Plus className="size-3" />
                Add skill
              </Button>
            )}
          </div>
        </section>

        <Separator />

        {/* Education */}
        <section className="space-y-3">
          <SectionTitle icon={GraduationCap} onEdit={onEditEducation}>
            Education
          </SectionTitle>
          {education.map((item) => (
            <div
              key={`${item.degree}-${item.period}`}
              className="flex items-center gap-3 rounded-md bg-profile-info-bg p-3"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-background text-muted-foreground">
                <GraduationCap className="size-4" />
              </div>
              <div className="leading-tight">
                <p className="text-small font-semibold">{item.degree}</p>
                <p className="text-profile-caption text-muted-foreground">
                  {item.institution}
                </p>
                <p className="text-profile-caption text-muted-foreground/70">
                  {item.period}
                </p>
              </div>
            </div>
          ))}
        </section>

        <Separator />

        {/* Experience */}
        <section className="space-y-3">
          <SectionTitle icon={Briefcase} onEdit={onEditExperience}>
            Experience
          </SectionTitle>
          <ol className="ml-1 space-y-4 border-l">
            {experience.map((item) => (
              <li
                key={`${item.title}-${item.period}`}
                className="relative flex items-start justify-between gap-3 pl-4"
              >
                <span
                  className={
                    item.current
                      ? "absolute left-[-4.5px] top-1 size-2 rounded-full bg-primary-500 ring-4 ring-primary-100"
                      : "absolute left-[-4.5px] top-1 size-2 rounded-full bg-muted-foreground/50"
                  }
                />
                <div className="leading-tight">
                  <p className="text-small font-semibold">{item.title}</p>
                  {item.company && (
                    <p className="text-profile-caption text-muted-foreground">
                      {item.company}
                    </p>
                  )}
                </div>
                <p className="shrink-0 text-profile-caption text-muted-foreground">
                  {item.period}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </CardContent>
    </Card>
  )
}

function SectionTitle({
  icon: Icon,
  children,
  onEdit,
}: {
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
  onEdit?: () => void
}) {
  return (
    <div className="flex items-center justify-between">
      <h3 className="flex items-center gap-2 text-profile-caption font-semibold uppercase tracking-wide text-muted-foreground">
        <Icon className="size-3.5" />
        {children}
      </h3>
      {onEdit !== undefined && (
        <Button
          variant="ghost"
          size="sm"
          className="h-6 px-1.5 text-profile-caption text-muted-foreground"
          onClick={onEdit}
        >
          Edit
        </Button>
      )}
    </div>
  )
}