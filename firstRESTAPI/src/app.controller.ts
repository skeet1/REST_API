import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  getTestFunc(): string {
    return 'Lahoum sali wasalim 3la siyidina mohamed';
  }

  @Get('/register')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
  }

  @Get('api/auth/google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req: any) {
    return this.appService.googleLogin(req);
  }

  @Get('fortyTwo')
  @UseGuards(AuthGuard('fortyTwo'))
  async fortyTwoAuth(@Req() req: any) {
  }

  @Get('api/auth/fortyTwo/callback')
  @UseGuards(AuthGuard('fortyTwo'))
  fortyTwoAuthRedirect(@Req() req: any) {
    return this.appService.fortyTwoLogin(req);
  }
}
