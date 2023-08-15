import { VerifyCallback } from 'passport-google-oauth20';
declare const GoogleStartegy_base: new (...args: any[]) => any;
export declare class GoogleStartegy extends GoogleStartegy_base {
    constructor();
    validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any>;
}
export {};
