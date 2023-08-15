import { PrismaService } from 'src/prisma.service';
import { user } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllUsers(): Promise<user[]>;
    getUser(id: number): Promise<user | null>;
    createUser(data: user): Promise<user>;
    updateUser(id: number, updatedUserData: user): Promise<user>;
    deleteUser(id: number): Promise<user>;
}
