import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { user } from '@prisma/client';

@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getAllUsers(): Promise<user[]> {
    return this.userService.getAllUsers();
  }

  @Post()
  async createUser(@Body() postData: user): Promise<user> {
    return this.userService.createUser(postData);
  }

  @Get(':id')
  async getUser(@Param('id') id: number): Promise<user> {
    return this.userService.getUser(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() putData: user,
  ): Promise<user> {
    return this.userService.updateUser(id, putData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<user> {
    return this.userService.deleteUser(id);
  }
}
