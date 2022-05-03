import express from 'express';
import { env } from 'process';
import cors from 'cors';

//Inicial balance
let currentBalance:number = 0;
let transHistory: Object [] = [];

const PORT = process.env.PORT || 3000;
const app = express();
const endpoint: string = "/v1";

app.use(express.json());
app.use(cors());

app.get(endpoint + '/balance', (req, res) => {
    res.json({currentBalance})
});

app.post(endpoint + '/transaction', (req, res) => {
    let description:string = "";
    let newBalance:number = 0;
    newBalance = req.body.balance;
    description = req.body.description;
    currentBalance += newBalance
    if (currentBalance < 0){
        currentBalance -= newBalance
        res.send("Transaction failed: insufficient funds");
    }else{
        const objTransHistory: Object = {newBalance, description};
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
})