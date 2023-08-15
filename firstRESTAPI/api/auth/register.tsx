import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function registerHandler(req: any, res: any) {
  const { username, email, password } = req.body;

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  });

  res.json(user);
}
