import z from "zod";

export const profileSchema = z.object({
    displayName: z.string().min(3, "Display name must be atleast 3 characters").max(20, "Display name must be less than or equal to 25 characters"),
    designation: z.string().min(5, 'Designation must be at least 5 characters').max(50, 'Designation must be less than 50 characters'),
    bio: z.string().min(10, "Bio must be at least 10 characters")
        .max(200, "Bio must be less than 200 characters"),
    location: z.string()
        .regex(/^[A-Za-z\s]+,\s*[A-Za-z\s]+$/, "Location must be in 'City, Country' format")
        .min(3, "Location must be at least 3 characters")
        .max(100, "Location must be less than 100 characters"),
    interest: z.array(z.string).min(1, "Please select at least one interest")
})