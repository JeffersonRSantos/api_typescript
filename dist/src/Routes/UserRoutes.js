"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.get('/', (req, res, next) => {
    return res.status(200).send("Olá, seja bem vindo a aplicação 'TypeScript com SOLID' ");
});
