import z from "zod";
import { sTest } from "./test";

export const sTestSuite = z.object({
    id: z.string().min(1),
    appName: z.string().min(1),
    dockerImage: z.object({
        baseline: z.string().min(1),
        underTest: z.string().min(1),
    }),
    tests: sTest,
});
