import { useState } from "react"
import { Bird, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Account, AccountId, ConnectAccountsCardProps } from "@/types/profile"

const defaultAccounts: Account[] = [
  { id: "github", name: "GitHub", description: "Code & contributions", connected: false },
  { id: "freelancer", name: "Freelancer.com", description: "Projects & ratings", connected: false },
]

export function ConnectAccountsCard({
  title = "Connect accounts",
  description = "Link your accounts to verify your skills.",
  accounts: initialAccounts = defaultAccounts,
  onConnect,
}: ConnectAccountsCardProps) {
  const [accounts, setAccounts] = useState(initialAccounts)

  async function handleConnect(id: AccountId) {
    await onConnect?.(id)
    setAccounts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, connected: true } : a)),
    )
  }

  return (
    <Card className="gap-4">
      <CardHeader className="gap-1">
        <CardTitle className="text-small font-semibold">{title}</CardTitle>
        <CardDescription className="text-profile-caption">{description}</CardDescription>
      </CardHeader>
      <Separator />

      <CardContent className="space-y-3">
        {accounts.map((account) => (
          <div
            key={account.id}
            className="flex items-center gap-3 rounded-md border p-2.5"
          >
            <AccountLogo id={account.id} />
            <div className="min-w-0 flex-1 leading-tight">
              <p className="text-small font-semibold">{account.name}</p>
              <p className="text-profile-caption text-muted-foreground">
                {account.description}
              </p>
            </div>
            <Button
              variant="secondary"
              size="sm"
              disabled={account.connected}
              onClick={() => handleConnect(account.id)}
              className="h-6 bg-profile-info-bg px-2 text-profile-micro font-medium text-profile-info-text hover:bg-profile-info-hover"
            >
              {account.connected ? "Connected" : "Connect Account"}
            </Button>
          </div>
        ))}

        <div className="flex items-start gap-2 rounded-md bg-profile-info-bg p-3 text-profile-caption text-profile-info-text">
          <Check className="mt-0.5 size-3.5 shrink-0" />
          <p>Your credentials stay private. We only share verified signals.</p>
        </div>
      </CardContent>
    </Card>
  )
}

function AccountLogo({ id }: { id: AccountId }) {
  if (id === "github") {
    return (
      <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-profile-brand-github text-inverse">
        <svg viewBox="0 0 16 16" className="size-4 fill-current" aria-hidden>
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </div>
    )
  }
  return (
    <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-profile-brand-freelancer-bg text-profile-brand-freelancer">
      <Bird className="size-4" />
    </div>
  )
}