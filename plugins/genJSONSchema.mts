import z from "zod";
import { sReport } from "../src/schemas/report";
import type { Rollup } from "vite";

export function genJSONSchema() {
    return {
        name: "plugin-gen-json-schema",
        generateBundle(this: Rollup.PluginContext) {
            this.emitFile({
                fileName: "schema.json",
                type: "asset",
                source: JSON.stringify(z.toJSONSchema(sReport)),
            });
        },
    };
}
