let descriptionVal = document.getElementById("description");
let amountVal = document.getElementById("amount");
let balance = document.getElementById("balanceShow");

const getBalance = async () => {
    const url = `https://shrouded-sea-31521.herokuapp.com/v1/balance`;
    const res = await fetch(url,{method: 'GET',
    headers: { 'Content-Type': 'application/json' },})
    const data = await res.json();
    
    console.log(data)
    balance.innerHTML = "$" + data.currentBalance
}

const postTransaction = async () => {
    const desc = descriptionVal.value
    const val = +amountVal.value
    const url = `https://shrouded-sea-31521.herokuapp.com/v1/transaction`;
    if(desc === "" && val ==="")return;
    
        await fetch(url,{method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify({ description: desc, balance: val })})
        document.getElementById("amount").value = ""
        document.getElementById("description").value =""
}

const clear = async  () =>{
    const url = `https://shrouded-sea-31521.herokuapp.com/v1/clear`;
    await fetch(url,{method: 'POST',headers: { 'Content-Type': 'application/json' },})
}

clear()