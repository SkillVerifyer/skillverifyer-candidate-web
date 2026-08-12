// ── User & Auth ──────────────────────────────────────────
export type UserRole = "candidate" | "recruiter" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// ── Candidate ────────────────────────────────────────────
export interface Candidate {
  id: string;
  name: string;
  email: string;
  role: string;
  cvFileName: string;
  createdAt: string;
}

export interface CvParsedData {
  skills: string[];
  education: EducationEntry[];
  experience: ExperienceEntry[];
  summary: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  year: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  description: string;
}

// ── Assessment ───────────────────────────────────────────
export type AssessmentType = "coding" | "essay";

export interface Assessment {
  id: string;
  candidateId: string;
  type: AssessmentType;
  status: "pending" | "in_progress" | "completed" | "flagged";
  score: number | null;
  behavioralFlags: BehavioralFlag[];
  startedAt: string | null;
  completedAt: string | null;
}

export interface BehavioralFlag {
  id: string;
  type: "phone_detected" | "second_person" | "gaze_deviation" | "extra_voice" | "tab_switch";
  timestamp: string;
  confidence: number;
  screenshotUrl?: string;
}

// ── Digital Footprint ────────────────────────────────────
export interface GitHubProfile {
  username: string;
  verified: boolean;
  publicRepos: number;
  totalCommits: number;
  topLanguages: { language: string; percentage: number }[];
  contributionScore: number;
}

export interface FreelancerProfile {
  username: string;
  verified: boolean;
  rating: number;
  completedProjects: number;
  skills: string[];
  earnings: string;
}

// ── Trust Score ──────────────────────────────────────────
export interface TrustScore {
  candidateId: string;
  overallScore: number; // 0-100
  breakdown: {
    cvAccuracy: number;
    testPerformance: number;
    digitalFootprint: number;
    behavioralIntegrity: number;
    interviewScore: number;
  };
  xaiExplanation: XaiExplanation;
  conflicts: TrustConflict[];
}

export interface XaiExplanation {
  summary: string;
  factors: {
    factor: string;
    impact: "positive" | "negative" | "neutral";
    weight: number;
    detail: string;
  }[];
}

export interface TrustConflict {
  claim: string;
  evidence: string;
  severity: "low" | "medium" | "high";
}
