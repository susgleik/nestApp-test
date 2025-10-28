import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/users')
  getAllUsers() {
    return this.userService.getUsers();
  }
}
