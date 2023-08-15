import { UserService } from './user.service';
import { user } from '@prisma/client';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<user[]>;
    createUser(postData: user): Promise<user>;
    getUser(id: number): Promise<user>;
    updateUser(id: number, putData: user): Promise<user>;
    deleteUser(id: number): Promise<user>;
}
