import { z } from "zod";

const updateFeedbackSchema = z.object({
    body: z.object({
        text: z.string().optional(),
        name: z.string().optional(),
        company: z.string().optional(),
        image: z.string().optional(),
    })
})

const updateWorkSchema = z.object({
    body: z.object({
        title: z.string().optional(),
        tags: z.array(z.string()).optional(),
    })
})

export { updateFeedbackSchema, updateWorkSchema };
