const proficiencyLevels = {
  BEGINNER: "Beginner",
  INTERMEDIATE: "Intermediate",
  ADVANCED: "Advanced",
  FLUENT: "Fluent",
  NATIVE: "Native",
} as const;

const proficiencyLevelsJapanese = {
  [proficiencyLevels.BEGINNER]: "初級",
  [proficiencyLevels.INTERMEDIATE]: "中級",
  [proficiencyLevels.ADVANCED]: "上級",
  [proficiencyLevels.FLUENT]: "流暢",
  [proficiencyLevels.NATIVE]: "ネイティブ",
} as const;

export { proficiencyLevels, proficiencyLevelsJapanese };
