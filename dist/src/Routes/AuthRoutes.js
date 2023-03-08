"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const LoginUserAuth_1 = require("../useCase/LoginUserAuth");
const authRoutes = (0, express_1.Router)();
exports.authRoutes = authRoutes;
authRoutes.post('/login', (req, res, next) => {
    return LoginUserAuth_1.loginUserAuthController.login(req, res, next);
});
