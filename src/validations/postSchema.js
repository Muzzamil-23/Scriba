import { z } from "zod"

export const postSchema = z.object({
    title: z
        .string()
        .min(5, "Title must be at least 5 characters")
        .max(100, "Title must be under 100 characters")
        .trim(),
    content: z
        .string()
        .min(20, "Content must be at least 20 characters long")
        .refine(
            (val) => val.replace(/<[^>]+>/g, "").trim().length > 0,
            "Content cannot be empty"
        ),
    slug: z
        .string()
        .min(3)
        .max(50)
        .regex(/^[a-z0-9-]+$/, "Slug must contain only lowercase letters, numbers, and hyphens"),
    tags: z.array(z.string().max(20)).max(5, "No more than 5 tags").optional(),
    category: z.enum([]).optional()
}) 
