import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '.prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async find() {
    return this.prisma.user.findMany();
  }
  async create(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data });
  }
}
