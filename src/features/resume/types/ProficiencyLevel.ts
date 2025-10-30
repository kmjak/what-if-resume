import { proficiencyLevels } from "@/features/resume/constants";

export type ProficiencyLevel = (typeof proficiencyLevels)[keyof typeof proficiencyLevels];
