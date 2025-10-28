import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'john doe',
      phone: '1234567890',
    },
    {
      id: 2,
      name: 'ernesto perez',
      phone: '1234567890',
    },
    {
      id: 3,
      name: 'john lopez',
      phone: '1234567890',
    },
  ];

  getUsers() {
    return this.users;
  }
}
