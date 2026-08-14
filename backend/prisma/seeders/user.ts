import { genSalt, hash } from "bcrypt-ts";
import { prisma } from "../../src/lib/db";

const main = async (): Promise<void> => {
    
    const salt = await genSalt(10);
    const password = await hash("admin123", salt);

    await prisma.user.create({
        data: {
            name: 'admin',
            email: 'admin@gmail.com',
            password,
        }
    });
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect())