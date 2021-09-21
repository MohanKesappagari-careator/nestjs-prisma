import { UserService } from './user.service';
export declare class AppController {
    private readonly userService;
    constructor(userService: UserService);
    signupUser(userData: {
        name: string;
        email: string;
    }): Promise<import(".prisma/client").User>;
    get(): Promise<import(".prisma/client").User[]>;
}
