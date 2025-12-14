import z from "zod";

const sBase = z.object({
    id: z.string(),
    baseline: z.string(),
    underTest: z.string(),
});

const sCassandra = sBase.extend({
    keyspace: z.string().min(1),
    table: z.string().min(1),
    column: z.string().min(1),
});

const sKafka = sBase.extend({
    topic: z.string(),
    key: z.string(),
});

const sLog = sBase.extend({
    regex: z.string(),
});

export const sAssertion = z.discriminatedUnion("type", [
    sCassandra,
    sKafka,
    sLog,
]);
