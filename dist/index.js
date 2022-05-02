"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//Inicial balance
let currentBalance = 0;
let transHistory = [];
const PORT = process.env.PORT;
const app = (0, express_1.default)();
const endpoint = "/v1";
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get(endpoint + '/balance', (req, res) => {
    res.json({ currentBalance });
});
app.post(endpoint + '/transaction', (req, res) => {
    let description = "";
    let newBalance = 0;
    newBalance = req.body.balance;
    description = req.body.description;
    currentBalance += newBalance;
    if (currentBalance < 0) {
        currentBalance -= newBalance;
        res.send("Transaction failed: insufficient funds");
    }
    else {
        const objTransHistory = { newBalance, description };
        transHistory.push(objTransHistory);
        console.log(newBalance, description);
        console.log(transHistory);
        res.send("Transaction processed correctly");
    }
});
app.post(endpoint + '/clear', (req, res) => {
    currentBalance = 0;
    transHistory = [];
    console.log(currentBalance);
    console.log(transHistory);
    res.send('All was reset correctly');
});
app.listen(PORT, () => {
    console.log('The application is listening on port', PORT);
});
