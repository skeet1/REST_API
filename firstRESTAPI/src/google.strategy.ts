import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { profile } from 'console';

@Injectable()
export class GoogleStartegy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '801771295937-07b07250ms1t977p8oe5usjdttu9k1q6.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:5000/api/auth/google/callback',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    console.log(profile);
    const { name, emails, photos } = profile;
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
