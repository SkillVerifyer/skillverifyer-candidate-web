import { useRef, useState } from "react"
import { FileCheck2, FileUp } from "lucide-react"

import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { CvUploadCardProps } from "@/types/profile"

const MAX_SIZE_MB = 10

export function CvUploadCard({ initialFileName, onUpload }: CvUploadCardProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState(initialFileName)
  const [error, setError] = useState<string | null>(null)

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    e.target.value = "" // allow re-selecting the same file
    if (!file) return

    if (file.type !== "application/pdf") {
      setError("Upload a PDF file.")
      return
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`The file is larger than ${MAX_SIZE_MB} MB.`)
      return
    }

    setError(null)
    await onUpload?.(file)
    setFileName(file.name)
  }

  const uploaded = Boolean(fileName)

  return (
    <Card className="p-4">
      <div className="flex flex-col items-center gap-2 rounded-md border border-dashed border-blue-400 px-6 py-8 text-center">
        {uploaded ? (
          <FileCheck2 className="size-12 text-green-600" strokeWidth={1.5} />
        ) : (
          <FileUp className="size-12 text-muted-foreground" strokeWidth={1.5} />
        )}

        <h3 className="mt-1 text-sm font-semibold">
          {uploaded ? "Your CV is uploaded" : "Upload your CV"}
        </h3>
        <p className="max-w-sm text-xs text-muted-foreground">
          {uploaded ? (
            <>
              <span className="font-semibold text-foreground">{fileName}</span>{" "}
              was uploaded successfully. You can replace it with another file.
            </>
          ) : (
            "Add your CV and we’ll fill in your profile from it."
          )}
        </p>

        <Button
          size="sm"
          className="mt-2 rounded-full bg-green-600 px-5 hover:bg-green-700"
          onClick={() => inputRef.current?.click()}
        >
          {uploaded ? "Choose another file" : "Choose file"}
        </Button>
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          className="sr-only"
          onChange={handleChange}
        />

        <p className="text-xs text-muted-foreground">
          PDF, maximum {MAX_SIZE_MB} MB
        </p>
        {error && (
          <p role="alert" className="text-xs font-medium text-destructive">
            {error}
          </p>
        )}
      </div>
    </Card>
  )
}