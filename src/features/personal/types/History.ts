import { z } from "zod";

import { personalAgeSchema, personalHistorySchema } from "@/features/personal/schemas";

type PersonalAge = z.infer<typeof personalAgeSchema>;
type PersonalHistory = z.infer<typeof personalHistorySchema>;

export type { PersonalAge, PersonalHistory };
