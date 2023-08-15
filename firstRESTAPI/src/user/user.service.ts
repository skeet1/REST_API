import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { user } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async getAllUsers(): Promise<user[]> {
    return this.prisma.user.findMany();
  }

  async getUser(id: number): Promise<user | null> {
    return this.prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  async createUser(data: user): Promise<user> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(id: number, updatedUserData: user): Promise<user> {
    return this.prisma.user.update({
      where: {
        id: Number(id),
      },

      data: updatedUserData,
    });
  }

  async deleteUser(id: number): Promise<user> {
    console.log(`let's delete the user ${id}`);
    return this.prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
