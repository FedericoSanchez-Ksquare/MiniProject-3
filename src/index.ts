import express from 'express';

//Inicial balance
let currentBalance:number = 0;
let transHistory: Object [] = [];

const PORT = 3000;
const app = express();
const endpoint: string = "/v1";


app.use(express.json());

app.get(endpoint + '/balance', (req, res) => {
    res.json({currentBalance})
});

app.post(endpoint + '/transaction', (req, res) => {
    let description:string = "";
    let newBalance:number = 0;
    newBalance = req.body.balance;
    description = req.body.description;
    const objTransHistory: Object = {newBalance, description};
    transHistory.push(objTransHistory);
    console.log(newBalance, description);
    console.log(transHistory);
      res.send("Transaction processed correctly");
  });

app.listen(PORT, () => {
    console.log('The application is listening on port', PORT);
})