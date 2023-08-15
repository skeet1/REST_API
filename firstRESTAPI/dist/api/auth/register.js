"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function registerHandler(req, res) {
    const { username, email, password } = req.body;
    const user = await prisma.user.create({
        data: {
            username,
            email,
            password,
        },
    });
    res.json(user);
}
exports.default = registerHandler;
//# sourceMappingURL=register.js.map