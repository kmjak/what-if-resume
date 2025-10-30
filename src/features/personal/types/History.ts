import { personalAgeSchema, personalHistorySchema } from "@/features/personal/schemas";
import { z } from "zod";

type PersonalAge = z.infer<typeof personalAgeSchema>;
type PersonalHistory = z.infer<typeof personalHistorySchema>;

export type { PersonalAge, PersonalHistory };
