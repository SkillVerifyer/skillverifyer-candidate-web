import { ProfileHeaderCardProps } from "@/types/profile";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card } from "../ui/card";

export function ProfileHeaderCard({
  name,
  role,
  skillCount,
  profileScore,
  avatarUrl,
  email,
  phone,
}: ProfileHeaderCardProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <Card className="gap-0 overflow-hidden py-0">
      {/* Gradient banner */}
      <div className="relative h-18 bg-linear-to-r from-profile-banner-start via-profile-banner-middle to-profile-banner-end">
        <Avatar className="absolute left-5 top-11 size-14.5 rounded-md border-4 border-surface bg-surface shadow-sm">
          <AvatarImage src={avatarUrl} alt={name} className="rounded-none" />
          <AvatarFallback className="rounded-none bg-profile-avatar text-inverse">
            {initials}
          </AvatarFallback>
        </Avatar>
        <h2 className="absolute bottom-2 left-25.5 text-profile-heading font-semibold text-inverse">
          {name}
        </h2>
      </div>

      {/* Role + stats */}
      <div className="flex min-h-16 items-start justify-between gap-4 px-5 pb-4 pt-1.5">
        <p className="pl-20.5 text-small font-medium text-muted-foreground">
          {role}
        </p>

        <dl className="flex gap-8 pt-3 items-end">
          <dl className="flex gap-4 pt-3 text-small font-medium text-muted-foreground">
            <span>Email: {String(email)}</span>
            <span>Phone: {Number(phone)}</span>
          </dl>
          <Stat label="Skill" value={String(skillCount)} />
          <Stat label="Profile Score" value={`${profileScore}%`} />
        </dl>
      </div>
    </Card>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <>
      <div className="text-right leading-tight">
        <dd className="text-profile-heading font-semibold">{value}</dd>
        <dt className="text-small text-muted-foreground">{label}</dt>
      </div>
    </>
  );
}
