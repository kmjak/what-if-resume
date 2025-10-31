import { z } from "zod";

import { proficiencyLevels } from "@/features/resume/constants";

const careerSchema = z.object({
  title: z.string().min(1, "職歴・経歴名は必須です"),
  description: z.string().max(300, "説明は300文字以内で入力してください").optional(),
});

const strengthSchema = z.string().max(400, "強みは400文字以内で入力してください").optional();

const weaknessesSchema = z.string().max(400, "弱みは400文字以内で入力してください").optional();

const hobbySchema = z.object({
  name: z.string().min(1, "趣味名は必須です"),
  description: z.string().max(200, "説明は200文字以内で入力してください").optional(),
});

const certificationSchema = z.object({
  name: z.string().min(1, "資格名は必須です"),
});

const languageSchema = z.object({
  name: z.string().min(1, "言語名は必須です"),
  proficiency: z.enum(Object.values(proficiencyLevels) as [string, ...string[]], {
    message: "習熟度を選択してください",
  }),
});

const resumeSchema = z.object({
  careers: z
    .array(careerSchema)
    .min(1, "キャリアは最低1つ以上入力してください")
    .max(5, "キャリアは5つまで入力できます"),
  strength: strengthSchema,
  weaknesses: weaknessesSchema,
  hobbies: z
    .array(hobbySchema)
    .min(1, "趣味は最低1つ以上入力してください")
    .max(5, "趣味は5つまで入力できます"),
  certifications: z.array(certificationSchema).optional(),
  languages: z
    .array(languageSchema)
    .min(1, "言語は最低1つ以上入力してください")
    .max(5, "言語は5つまで入力できます"),
});

export {
  careerSchema,
  certificationSchema,
  hobbySchema,
  languageSchema,
  resumeSchema,
  strengthSchema,
  weaknessesSchema,
};
