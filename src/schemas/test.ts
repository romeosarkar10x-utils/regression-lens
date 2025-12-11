import z from "zod";

export const sTest = z.object({
    id: z.string().min(1),
    inputKafkaTopic: z.string().min(1),
});
