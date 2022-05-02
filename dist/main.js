let descriptionVal = document.getElementById("description");
let amountVal = document.getElementById("amount");


const postTransaction = async () => {
    const desc = descriptionVal.value
    const val = +amountVal.value
    const url = `http://localhost:3000/v1/transaction`;
    if(desc === "" && val ==="")
    {
    }else{
        await fetch(url,{method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify({ description: desc, balance: val })})
        document.getElementById("amount").value = ""
        document.getElementById("description").value =""
    }
}