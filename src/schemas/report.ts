import z from "zod";
import { sTestSuite } from "./testSuite";

export const sReport = z.array(sTestSuite);

export type tReport = z.infer<typeof sReport>;
