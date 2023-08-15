import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function profileHandler(req: any, res: any) {
  const userId = req.session.userId; // Use your session management logic here

  if (!userId) {
    res.status(401).json({ message: 'Not authenticated' });
    return;
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  res.json(user);
}
