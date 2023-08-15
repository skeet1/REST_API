"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const allUsers = await prisma.user.findMany({
        orderBy: {
            id: 'asc',
        },
    });
    console.log('All users: ');
    console.dir(allUsers, { depth: null });
}
main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
//# sourceMappingURL=index.js.map