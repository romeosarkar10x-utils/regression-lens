import z from "zod";

const sBase = z.object({
    id: z.string(),
    value: z.string(),
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

const sCassandraAssertionResult = z.object({
    type: z.literal("cassandra"),
    baseline: sCassandra,
    underTest: sCassandra,
});

const sKafkaAssertionResult = z.object({
    type: z.literal("kafka"),
    baseline: sKafka,
    underTest: sKafka,
});

const sLogAssertionResult = z.object({
    type: z.literal("log"),
    baseline: sLog,
    underTest: sLog,
});

export const sAssertionResult = z.discriminatedUnion("type", [
    sCassandraAssertionResult,
    sKafkaAssertionResult,
    sLogAssertionResult,
]);
