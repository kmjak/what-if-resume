"use client";

import { useResumeForm } from "@/features/resume/hooks";
import { Button } from "@/shared/shadcn/components/ui/button";
import { Form } from "@/shared/shadcn/components/ui/form";

import CareerFormSection from "./CareerFormSection";
import CertificationFormSection from "./CertificationFormSection";
import HobbyFormSection from "./HobbyFormSection";
import LanguageFormSection from "./LanguageFormSection";
import SelfAnalysisFormSection from "./SelfAnalysisFormSection";

function ResumeRegisterForm() {
  const {
    form,
    fieldArrays: { careerArray, hobbyArray, certArray, langArray },
    handlers: { handleSubmit, handleReset },
    state: { isLoading },
  } = useResumeForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="container mx-auto space-y-8">
        <CareerFormSection control={form.control} careerArray={careerArray} />
        <SelfAnalysisFormSection control={form.control} />
        <HobbyFormSection control={form.control} hobbyArray={hobbyArray} />
        <CertificationFormSection control={form.control} certArray={certArray} />
        <LanguageFormSection control={form.control} langArray={langArray} />

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={handleReset} disabled={isLoading}>
            リセット
          </Button>
          <Button type="submit" className="px-6" disabled={isLoading}>
            履歴書作成
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default ResumeRegisterForm;
