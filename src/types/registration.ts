export interface RegistrationProfile {
  fullName: string;
  email: string;
  jobRole: string;
  location: string;
}

export interface DigitalFootprint {
  github: boolean;
  freelance: boolean;
}

export interface RegistrationSubmission {
  profile: RegistrationProfile;
  cv: File;
  digitalFootprint: DigitalFootprint;
}

export interface RegistrationSubmitResult {
  success: boolean;
  message: string;
}

export interface Step1RegistrationProps {
  onNext: (profile: RegistrationProfile) => void;
}

export interface Step2CVUploadProps {
  onNext: (cv: File) => void;
  onBack: () => void;
}

export interface Step3DigitalFootprintProps {
  onBack: () => void;
  onFinish: (footprint: DigitalFootprint) => void;
}
