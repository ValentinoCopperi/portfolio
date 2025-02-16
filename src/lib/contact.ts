import { z } from "zod";

export const mailFormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})

export type MailFormState =
    | {
        errors?: {
            name?: string[]
            email?: string[],
            message? :string[]
        }
        message?: string,
        error?: string
    }
    | undefined | null