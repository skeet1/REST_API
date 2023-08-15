import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
