import z from "zod";
import { sLog } from "@/schemas/assertion";

type tLog = z.infer<typeof sLog>;

export default function Log({ id, baseline, underTest, regex }: tLog) {
    console.log("log", id, baseline, underTest);

    return (
        <div className="flex items-center gap-1.5 text-xs">
            <span className="text-muted-foreground">Regex:</span>
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
                {regex}
            </code>
        </div>
    );
}
