import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStartegy } from './google.strategy';
import { FortyTwoStrategy } from './fortyTwo.strategy';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, GoogleStartegy, FortyTwoStrategy],
})
export class AppModule {}
