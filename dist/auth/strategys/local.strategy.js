"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_local_1 = require("passport-local");
const common_1 = require("@nestjs/common");
class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super({
            usernameField: 'email',
            passReqToCallback: true,
        });
        this.authService = authService;
    }
    async validate(req, email, password) {
        console.log(req.headers.authorization);
        const user = await this.authService.validate({ email, password });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
}
exports.LocalStrategy = LocalStrategy;
//# sourceMappingURL=local.strategy.js.map