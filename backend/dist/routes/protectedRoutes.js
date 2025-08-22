"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = express_1.default.Router();
router.get('/dashboard', authMiddleware_1.protect, (req, res) => {
    res.json({
        message: 'Welcome to the dashboard',
        user: req.user
    });
});
exports.default = router;
//# sourceMappingURL=protectedRoutes.js.map