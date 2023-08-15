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
exports.FortyTwoStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_42_1 = require("passport-42");
const common_1 = require("@nestjs/common");
let FortyTwoStrategy = exports.FortyTwoStrategy = class FortyTwoStrategy extends (0, passport_1.PassportStrategy)(passport_42_1.Strategy, 'fortyTwo') {
    constructor() {
        super({
            clientID: 'u-s4t2ud-f7d50789bb40eb771d62139641a366662723869b5d214af32a3530a346de760a',
            clientSecret: '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',
            callbackURL: 'http://localhost:5000/api/auth/fortyTwo/callback',
            scope: [],
        });
    }
    async validate(accessToken, refreshToken, profile, done) {
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
};
exports.FortyTwoStrategy = FortyTwoStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FortyTwoStrategy);
//# sourceMappingURL=fortyTwo.strategy.js.map