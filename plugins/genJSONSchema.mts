import z from "zod";

import { sTestSuite } from "../src/schemas/testSuite";
import type { Rollup, ResolvedConfig } from "vite";

export function genJSONSchema() {
    let outDir: string;
    return {
        name: "plugin-gen-json-schema",

        configResolved(resolvedConfig: ResolvedConfig) {
            outDir = resolvedConfig.build.outDir;
        },
        generateBundle(this: Rollup.PluginContext) {
            this.emitFile({
                fileName: "schema.json",
                type: "asset",
                source: JSON.stringify(z.toJSONSchema(sTestSuite)),
            });
        },
    };
}
