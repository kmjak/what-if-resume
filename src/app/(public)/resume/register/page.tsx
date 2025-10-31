import type { Metadata } from "next";

import { ResumeRegisterForm } from "@/features/resume/components";

export const metadata: Metadata = {
  title: "履歴書登録",
};

export default function ResumeRegister(): React.ReactElement {
  return <ResumeRegisterForm />;
}
