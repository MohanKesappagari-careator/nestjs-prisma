import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async signupUser(@Body() userData: { name: string; email: string }) {
    return this.userService.create(userData);
  }
  @Get()
  async get() {
    return this.userService.find();
  }
}
