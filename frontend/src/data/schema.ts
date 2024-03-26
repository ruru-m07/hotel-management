import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  _id: z.string(),
  name: z.string(),
  rating: z.number(),
  charges: z.number(),
  city: z.string(),
  country: z.string(),
  phone: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
