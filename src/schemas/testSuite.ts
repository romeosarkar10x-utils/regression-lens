import z from "zod";
import { sTest } from "./test";

export const sTestSuite = z.object({
    id: z.string().min(1),
    timeUnixMillis: z.number().int().positive(),
    appName: z.string().min(1),
    dockerImageURL: z.object({
        baseline: z.string().min(1),
        underTest: z.string().min(1),
    }),
    tests: sTest,
});
