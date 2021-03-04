import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserType } from './interfaces/user';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly userService: UserService,
  ) {}

  @Get()
  findAll() {
    return this.userRepository.find();
  }

  @Post()
  create(@Body() user: UserType) {
    return this.userService.create(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userRepository.findOneUser(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: UserType) {
    return this.userRepository.updateUser(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRepository.removeUser(id);
  }
}
