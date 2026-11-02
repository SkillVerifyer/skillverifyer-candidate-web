/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";

import { Header } from "../../components/Registration/Header";
import { Stepper } from "../../components/Registration/Stepper";
import { Step1Registration } from "../../components/Registration/Step1Registration";
import { Step2CVUpload } from "../../components/Registration/Step2CVUpload";
import { Step3DigitalFootprint } from "../../components/Registration/Step3DigitalFootprint";

import type {
  RegistrationProfile,
  DigitalFootprint,
  RegistrationSubmission,
  RegistrationSubmitResult,
} from "../../types/registration";

export default function Register() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [profile, setProfile] = useState<RegistrationProfile | null>(null);

  const [cv, setCv] = useState<File | null>(null);

  const [digitalFootprint, setDigitalFootprint] = useState<DigitalFootprint | null>(null);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");
  const [submitError, setSubmitError] = useState<string>("");

  const nextStep = () => {
    setCurrentStep((previous) => Math.min(previous + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep((previous) => Math.max(previous - 1, 1));
  };

  const handleProfileNext = (data: RegistrationProfile) => {
    setProfile(data);
    setSubmitError("");
    nextStep();
  };

  const handleCVNext = (file: File) => {
    setCv(file);
    setSubmitError("");
    nextStep();
  };

  const handleFinish = async (footprint: DigitalFootprint) => {
    setDigitalFootprint(footprint);
    setSubmitError("");
    setSubmitMessage("");

    if (!profile) {
      setSubmitError("Registration profile is missing.");
      setCurrentStep(1);
      return;
    }

    if (!cv) {
      setSubmitError("Please upload your CV.");
      setCurrentStep(2);
      return;
    }

    const submission: RegistrationSubmission = {
      profile,
      cv,
      digitalFootprint: footprint,
    };

    setIsSubmitting(true);

    try {
      const formData = new FormData();

      formData.append("fullName", submission.profile.fullName);
      formData.append("email", submission.profile.email);
      formData.append("jobRole", submission.profile.jobRole);
      formData.append("location", submission.profile.location);

      formData.append("cv", submission.cv, submission.cv.name);

      formData.append("digitalFootprint", JSON.stringify(submission.digitalFootprint));

      // Replace this URL with your actual backend endpoint.
      const response = await fetch("/api/register", {
        method: "POST",
        body: formData,
      });

      const result: RegistrationSubmitResult = await response.json().catch(() => ({
        success: false,
        message: "The server returned an invalid response.",
      }));

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Registration submission failed.");
      }

      setSubmitMessage(result.message || "Registration completed successfully.");
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "An unexpected error occurred.";

      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-237.5 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col min-h-187.5 relative">
        <Header />

        <main className="flex-1 px-4 py-10 sm:px-12 flex flex-col relative overflow-y-auto">
          <Stepper currentStep={currentStep} />

          <div className="flex-1 flex flex-col justify-start pb-8">
            {currentStep === 1 && <Step1Registration onNext={handleProfileNext} />}

            {currentStep === 2 && <Step2CVUpload onNext={handleCVNext} onBack={prevStep} />}

            {currentStep === 3 && (
              <Step3DigitalFootprint onBack={prevStep} onFinish={handleFinish} />
            )}

            {isSubmitting && (
              <p role="status" className="text-sm text-blue-600 mt-5 text-center">
                Submitting your registration...
              </p>
            )}

            {submitError && (
              <p role="alert" className="text-sm text-red-600 mt-5 text-center">
                {submitError}
              </p>
            )}

            {submitMessage && (
              <p role="status" className="text-sm text-green-600 mt-5 text-center">
                {submitMessage}
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}