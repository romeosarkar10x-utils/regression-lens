import z from "zod";

const sBase = z.object({
    id: z.string(),
    baseline: z.string(),
    underTest: z.string(),
});

const sCassandra = sBase.extend({
    type: z.literal("cassandra"),
    keyspace: z.string().min(1),
    table: z.string().min(1),
    column: z.string().min(1),
});

const sKafka = sBase.extend({
    type: z.literal("kafka"),
    topic: z.string(),
});

const sLog = sBase.extend({
    type: z.literal("log"),
    regex: z.string(),
});

export const sAssertion = z.discriminatedUnion("type", [
    sCassandra,
    sKafka,
    sLog,
]);

// const jsonSchema = z.toJSONSchema(sAssertion);
// console.log(JSON.stringify(jsonSchema, null, 4));
