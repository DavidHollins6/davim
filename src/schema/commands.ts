import { z } from 'zod'

export const CommandSchema = z.object({
    cmd: z.string(),
    description: z.string(),
    default: z.boolean(),
    mode: z.string()
});

export const CommandsSchema = CommandSchema.array();

export type Command = z.infer<typeof CommandSchema>;
