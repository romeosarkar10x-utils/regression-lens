import z from "zod";
import { sKafka } from "@/schemas/assertion";

type tKafka = z.infer<typeof sKafka>;

export default function Kafka({ id, baseline, underTest, topic, key }: tKafka) {
    console.log("kafka", id, baseline, underTest);
    return (
        <div className="flex flex-wrap gap-4 text-xs">
            <div className="flex items-center gap-1.5">
                <span className="text-muted-foreground">Topic:</span>
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
                    {topic}
                </code>
            </div>
            <div className="flex items-center gap-1.5">
                <span className="text-muted-foreground">Key:</span>
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
                    {key}
                </code>
            </div>
            <div className="flex items-center gap-1.5">
                <span className="text-muted-foreground">Value:</span>
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
                    {"Hello Kafka!"}
                </code>
            </div>
        </div>
    );
}
