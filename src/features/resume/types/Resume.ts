import { z } from "zod";

import {
  careerSchema,
  certificationSchema,
  hobbySchema,
  languageSchema,
  resumeSchema,
  strengthSchema,
  weaknessesSchema,
} from "@/features/resume/schemas";

type Resume = z.infer<typeof resumeSchema>;
type Career = z.infer<typeof careerSchema>;
type Hobby = z.infer<typeof hobbySchema>;
type Certification = z.infer<typeof certificationSchema>;
type Language = z.infer<typeof languageSchema>;
type Strength = z.infer<typeof strengthSchema>;
type Weaknesses = z.infer<typeof weaknessesSchema>;

export type { Career, Certification, Hobby, Language, Resume, Strength, Weaknesses };
