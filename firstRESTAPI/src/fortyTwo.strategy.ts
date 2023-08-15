import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-42';
import { Injectable } from '@nestjs/common';
import { profile } from 'console';

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy, 'fortyTwo') {
  constructor() {
    super({
      clientID: 'u-s4t2ud-f7d50789bb40eb771d62139641a366662723869b5d214af32a3530a346de760a',
      clientSecret: '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',
      callbackURL: 'http://localhost:5000/api/auth/fortyTwo/callback',
      scope: [],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    // console.log(profile);
    const { name, emails, photos } = profile;
    const infos = profile._json;
    console.log(infos);
    const user = {
      email: emails[0].value,
      name: name.givenName,
      lastName: name.lastName,
      picture: photos[0].value,
      accessToken,
    };
    done(null, user);
  }
}
