import { ResumeRegisterForm } from "@/features/resume/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "履歴書登録",
};

export default function ResumeRegister() {
  return <ResumeRegisterForm />;
}
