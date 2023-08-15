"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function profileHandler(req, res) {
    const userId = req.session.userId;
    if (!userId) {
        res.status(401).json({ message: 'Not authenticated' });
        return;
    }
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });
    res.json(user);
}
exports.default = profileHandler;
//# sourceMappingURL=profile.js.map