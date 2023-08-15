import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getTestFunc(): string;
    googleAuth(req: any): Promise<void>;
    googleAuthRedirect(req: any): "No user from google" | {
        message: string;
        user: any;
    };
    fortyTwoAuth(req: any): Promise<void>;
    fortyTwoAuthRedirect(req: any): "No user from google" | {
        message: string;
        user: any;
    };
}
