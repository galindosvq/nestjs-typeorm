import { Injectable } from '@nestjs/common';
import { UserType } from './interfaces/user';

@Injectable()
export class UserService {
  private readonly users: UserType[] = [];

  create(user: UserType) {
    this.users.push(user);
  }

  findAll(): UserType[] {
    return this.users;
  }
}
