import z from "zod";
import { sCassandra } from "@/schemas/assertion";

type tCassandraAssertion = z.infer<typeof sCassandra>;

export default function Cassandra({
    id,
    baseline,
    underTest,
    keyspace,
    table,
    column,
}: tCassandraAssertion) {
    console.log("cassandra", id, baseline, underTest);

    return (
        <div className="flex flex-wrap gap-4 text-xs">
            <div className="flex items-center gap-1.5">
                <span className="text-muted-foreground">Keyspace:</span>
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
                    {keyspace}
                </code>
            </div>
            <div className="flex items-center gap-1.5">
                <span className="text-muted-foreground">Table:</span>
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
                    {table}
                </code>
            </div>
            <div className="flex items-center gap-1.5">
                <span className="text-muted-foreground">Column:</span>
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
                    {column}
                </code>
            </div>
        </div>
    );
}
