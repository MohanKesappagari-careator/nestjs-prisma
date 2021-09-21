import { PrismaService } from './prisma.service';
import { Prisma } from '.prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    find(): Promise<import(".prisma/client").User[]>;
    create(data: Prisma.UserCreateInput): Promise<import(".prisma/client").User>;
}
