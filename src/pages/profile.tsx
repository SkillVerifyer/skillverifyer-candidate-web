import { RecommendedPositions } from "@/components/profile/RecommendedPositions";
import { ConnectAccountsCard } from "@/components/profile/ConnectAccountsCard";
import { CvUploadCard } from "@/components/profile/CvUploadCard";
import {
  ExtractedDataCard,
} from "@/components/profile/ExtractedDataCard";
import { ProfileHeaderCard } from "@/components/profile/profileHeaderCard";
import { Education, Experience, Skill } from "@/types/profile";
import { Job } from "@/types/jobs";

export default function Profile() {
  const skills: Skill[] = [
    { name: "React", verified: true },
    { name: "TypeScript", verified: true },
    { name: "Node.js", verified: true },
    { name: "PostgreSQL", verified: true },
    { name: "MySQL", verified: true },
    { name: "Python", verified: false },
  ];

  const education: Education[] = [
    {
      degree: "BSc Software Engineering",
      institution: "The Open University Of Sri Lanka",
      period: "2021 - Present",
    },
    {
      degree: "Advanced Level Examination",
      institution: "Vijitha National School, Polonnaruwa",
      period: "2018 - 2020",
    },
  ];

  const experience: Experience[] = [
    {
      title: "Freelance Web Developer",
      period: "2022 - Present",
      current: true,
    },
    {
      title: "Web Developer",
      company: "Metro Express",
      period: "June 2023 - December 2023",
    },
  ];

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
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col">
        <span className="text-large text-primary font-bold">
          Welcome back, Tharindu!
        </span>
        <span className="text-medium text-secondary">
          Your experience is verified and ready to share with employers.
        </span>
      </div>

      {/* Header card */}
      <ProfileHeaderCard
        name="Tharindu Nilan"
        role="Frontend Developer"
        email="tharindunilan04@gmail.com"
        phone={771234567}
        skillCount={6}
        profileScore={96}
      />

      {/* CV section */}
      <CvUploadCard initialFileName="CV.pdf" />

      {/* Extracted data and connect accounts section  */}
      <div className="grid items-start gap-6 md:grid-cols-[1.25fr_1fr]">
        <ExtractedDataCard
          skills={skills}
          education={education}
          experience={experience}
        />
        <ConnectAccountsCard />
      </div>

      {/* recommended positions section */}
      <RecommendedPositions jobs={jobs} />
    </div>
  );
}
