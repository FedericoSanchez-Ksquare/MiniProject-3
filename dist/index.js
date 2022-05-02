"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Inicial balance
let currentBalance = 0;
const PORT = 3000;
const app = (0, express_1.default)();
const endpoint = "/v1";
app.use(express_1.default.json());
app.get(endpoint + '/balance', (req, res) => {
    res.json({ currentBalance });
});
app.listen(PORT, () => {
    console.log('The application is listening on port', PORT);
});
