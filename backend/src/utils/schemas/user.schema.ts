import { z } from "zod";
import { prisma } from "../../lib/db";

const baseUserSchema = z.object({

    name: z.string({ })
})