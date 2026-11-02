import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { InputField } from "./InputField";
import { StepHeader } from "./StepHeader";
import type { RegistrationProfile, Step1RegistrationProps } from "../../types/registration";

type ProfileErrors = Partial<Record<keyof RegistrationProfile, string>>;

const initialProfile: RegistrationProfile = {
  fullName: "",
  email: "",
  jobRole: "",
  location: "",
};

export const Step1Registration = ({ onNext }: Step1RegistrationProps) => {
  const [profile, setProfile] = useState<RegistrationProfile>(initialProfile);

  const [errors, setErrors] = useState<ProfileErrors>({});

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name !== "fullName" && name !== "email" && name !== "jobRole" && name !== "location") {
      return;
    }

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: undefined,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: ProfileErrors = {};

    if (!profile.fullName.trim()) {
      nextErrors.fullName = "Full Name is required";
    }

    if (!profile.email.trim()) {
      nextErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email.trim())) {
      nextErrors.email = "Enter a valid email address";
    }

    if (!profile.jobRole.trim()) {
      nextErrors.jobRole = "Job role is required";
    }

    if (!profile.location.trim()) {
      nextErrors.location = "Location is required";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    onNext({
      fullName: profile.fullName.trim(),
      email: profile.email.trim(),
      jobRole: profile.jobRole.trim(),
      location: profile.location.trim(),
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      <StepHeader
        step={1}
        totalSteps={3}
        title="Let's build your profile"
        subtitle="Tell us a little about yourself. We'll use this to personalize your candidate experience."
      />

      <form
        onSubmit={handleSubmit}
        className="w-full border border-gray-200/80 rounded-2xl p-6 sm:p-8 bg-gray-50/30 animate-in fade-in duration-500"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
          <InputField
            label="Full Name"
            name="fullName"
            placeholder="Enter full name here"
            value={profile.fullName}
            error={errors.fullName}
            onChange={handleInputChange}
          />

          <InputField
            label="Email address"
            name="email"
            type="email"
            placeholder="Enter email address here"
            value={profile.email}
            error={errors.email}
            onChange={handleInputChange}
          />

          <InputField
            label="Job role"
            name="jobRole"
            placeholder="Enter job role here"
            value={profile.jobRole}
            error={errors.jobRole}
            onChange={handleInputChange}
          />

          <InputField
            label="Location"
            name="location"
            placeholder="Enter location here"
            value={profile.location}
            error={errors.location}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer mt-8 w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium py-3 rounded-full flex items-center justify-center gap-2 transition-colors shadow-sm shadow-blue-500/20 active:scale-[0.99]"
        >
          Create my profile
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
