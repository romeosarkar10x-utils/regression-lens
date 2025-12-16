import z from "zod";
import { sTest } from "./test";

export const sTestSuite = z.object({
    uuid: z.uuidv4(),
    name: z.string(),
    timeUnixMillis: z.number().int().positive(),
    appName: z.string().min(1),
    dockerImageURL: z.object({
        baseline: z.string().min(1),
        underTest: z.string().min(1),
    }),
    tests: z.array(sTest),
});

export type tTestSuite = z.infer<typeof sTestSuite>;
