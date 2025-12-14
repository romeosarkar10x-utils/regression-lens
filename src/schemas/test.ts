import z from "zod";
import { sAssertion } from "./assertion";

export const sTest = z.object({
    id: z.string().min(1),
    inputKafkaTopic: z.string().min(1),
    assertions: z.array(sAssertion),
});
