import express from 'express';

//Inicial balance
let currentBalance:number = 0;

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
    currentBalance += newBalance
      res.send("Transaction processed correctly");
  });


app.listen(PORT, () => {
    console.log('The application is listening on port', PORT);
})