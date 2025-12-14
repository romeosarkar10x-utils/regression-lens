import z from "zod";
import { sTestSuite } from "./testSuite";

export const sReport = z.array(sTestSuite);
