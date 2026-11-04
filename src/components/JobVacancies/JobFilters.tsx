import { useId } from "react"

import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { EmploymentType, JobFiltersProps, JobFilterValues } from "@/types/jobs"

// eslint-disable-next-line react-refresh/only-export-components
export const defaultFilters: JobFilterValues = {
  search: "",
  employmentType: "all",
  location: "all",
  category: "all",
}

const employmentOptions: { value: EmploymentType; label: string }[] = [
  { value: "all", label: "All Types" },
  { value: "full-time", label: "Full-Time" },
  { value: "part-time", label: "Part-Time" },
  { value: "internship", label: "Internship" },
  { value: "remote", label: "Remote" },
  { value: "remote-internship", label: "Remote Internship" },
]

export function JobFilters({
  values,
  onChange,
  locations,
  categories,
}: JobFiltersProps) {
  const id = useId()
  const set = <K extends keyof JobFilterValues>(
    key: K,
    value: JobFilterValues[K],
  ) => onChange({ ...values, [key]: value })

  return (
    <div className="grid gap-5 rounded-lg border border-default bg-card p-4 md:grid-cols-[1fr_220px] md:gap-8">
      {/* Left column */}
      <div className="space-y-4">
        <div className="space-y-2">
          <FieldLabel htmlFor={`${id}-search`}>Search</FieldLabel>
          <Input
            id={`${id}-search`}
            type="search"
            value={values.search}
            onChange={(e) => set("search", e.target.value)}
            placeholder="Search by title, company or keyword"
            className="h-8 border-default bg-card text-small"
          />
        </div>

        <div className="space-y-2">
          <FieldLabel>Employment type</FieldLabel>
          <RadioGroup
            value={values.employmentType}
            onValueChange={(v) => set("employmentType", v as EmploymentType)}
            className="flex flex-wrap gap-x-5 gap-y-2"
          >
            {employmentOptions.map((option) => (
              <div key={option.value} className="flex items-center gap-1.5">
                <RadioGroupItem
                  id={`${id}-${option.value}`}
                  value={option.value}
                  className="size-3.5 border-btn-inactive-border data-[state=checked]:border-btn-primary [&_svg]:fill-btn-primary [&_svg]:stroke-btn-primary"
                />
                <Label
                  htmlFor={`${id}-${option.value}`}
                  className="text-small font-normal text-body"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      {/* Right column */}
      <div className="space-y-4">
        <FilterSelect
          label="Location"
          allLabel="All Locations"
          value={values.location}
          options={locations}
          onChange={(v) => set("location", v)}
        />
        <FilterSelect
          label="Category"
          allLabel="All Category"
          value={values.category}
          options={categories}
          onChange={(v) => set("category", v)}
        />
      </div>
    </div>
  )
}

function FieldLabel({
  children,
  htmlFor,
}: {
  children: React.ReactNode
  htmlFor?: string
}) {
  return (
    <Label
      htmlFor={htmlFor}
      className="text-small font-semibold uppercase tracking-wide text-subtitle"
    >
      {children}
    </Label>
  )
}

function FilterSelect({
  label,
  allLabel,
  value,
  options,
  onChange,
}: {
  label: string
  allLabel: string
  value: string
  options: string[]
  onChange: (value: string) => void
}) {
  return (
    <div className="space-y-2">
      <FieldLabel>{label}</FieldLabel>
      <Select value={value} onValueChange={(nextValue) => onChange(nextValue ?? "all")}>
        <SelectTrigger
          aria-label={label}
          className="h-8 w-full border-default bg-card text-small"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{allLabel}</SelectItem>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}