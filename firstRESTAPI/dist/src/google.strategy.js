"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleStartegy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_google_oauth20_1 = require("passport-google-oauth20");
const common_1 = require("@nestjs/common");
let GoogleStartegy = exports.GoogleStartegy = class GoogleStartegy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy, 'google') {
    constructor() {
        super({
            clientID: '801771295937-07b07250ms1t977p8oe5usjdttu9k1q6.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:5000/api/auth/google/callback',
            scope: ['email', 'profile'],
        });
    }
    async validate(accessToken, refreshToken, profile, done) {
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
};
exports.GoogleStartegy = GoogleStartegy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GoogleStartegy);
//# sourceMappingURL=google.strategy.js.map