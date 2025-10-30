import { z } from "zod";

const personalAgeSchema = z.array(z.object({ title: z.string(), detail: z.string() }));

const personalHistorySchema = z.object({
  ages: z.record(z.string(), personalAgeSchema),
  hobbies: z.array(z.string()),
  majorEvents: z.array(z.string()),
  personality: z.string(),
});

export { personalAgeSchema, personalHistorySchema };
