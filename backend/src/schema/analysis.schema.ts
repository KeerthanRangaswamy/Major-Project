import { z } from "zod/v4";

export const recommendationSchema = z.object({
  age: z
    .string()
    .min(1, "Age is required")
    .transform((val) => parseInt(val, 10))
    .refine((val) => val > 0 && val <= 120, "Age must be between 1 and 120"),
  gender: z
    .string()
    .min(1, "Gender is required")
    .refine(
      (val) => ["male", "female", "other"].includes(val.toLowerCase()),
      "Gender must be male, female, or other",
    ),
  name: z.string().max(100, "Name must be at most 100 characters").optional(),
});

export const historyQuerySchema = z.object({
  page: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val, 10) : 1))
    .refine((val) => val > 0, "Page must be a positive number"),

  limit: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val, 10) : 10))
    .refine((val) => val > 0 && val <= 50, "Limit must be between 1 and 50"),

  sortBy: z
    .string()
    .optional()
    .default("createdAt")
    .refine(
      (val) =>
        ["createdAt", "age", "gender", "result.predicted_food"].includes(val),
      "Invalid sort field",
    ),

  sortOrder: z
    .string()
    .optional()
    .default("desc")
    .refine(
      (val) => ["asc", "desc"].includes(val),
      "Sort order must be 'asc' or 'desc'",
    ),
});

export const deleteAnalysisParamsSchema = z.object({
  analysisId: z
    .string()
    .min(1, "Analysis ID is required")
    .regex(/^[0-9a-fA-F]{24}$/, "Analysis ID must be a valid MongoDB ObjectId"),
});
