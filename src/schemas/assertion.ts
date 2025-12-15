import z from "zod";

const sBase = z.object({
    id: z.string(),
    baseline: z.string(),
    underTest: z.string(),
});

export const sCassandra = sBase.extend({
    type: z.literal("cassandra"),
    keyspace: z.string().min(1),
    table: z.string().min(1),
    column: z.string().min(1),
});

export const sKafka = sBase.extend({
    type: z.literal("kafka"),
    topic: z.string(),
    key: z.string(),
});

export const sLog = sBase.extend({
    type: z.literal("log"),
    regex: z.string(),
});

export const sAssertion = z.discriminatedUnion("type", [
    sCassandra,
    sKafka,
    sLog,
]);

export type tCassandra = z.infer<typeof sCassandra>;
export type tKafka = z.infer<typeof sKafka>;
export type tLog = z.infer<typeof sLog>;
export type tAssertion = z.infer<typeof sAssertion>;
