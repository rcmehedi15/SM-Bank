// 1. add event handler with the withdraw button
// 2. get the withdraw amount from the withdraw input field
// 2.5 also make sure to convert the input into a number by using  parseFloat
// 3 . get previous withdraw total
// 4. calculate total withdraw amount
// 5. set total withdraw amount
// 6. calculate new balance total
// 6.a -- set the new balance total
// 7. clear the withdraw field

// step - 1 : 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step - 2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = withdrawField.value;
    // step -3 : 
    const withdrawtotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawtotalElement.innerText;
    // step - 4:
    const currentWithdrawTotal =
        parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);
    withdrawtotalElement.innerText = currentWithdrawTotal;
    // step - 5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotalElement.innerText;

    // step - 6:
    const newBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat (newWithdrawAmount);
    balanceTotalElement.innerText = newBalanceTotal;

    // step - 7 : clear the withdraw field
        withdrawField.value = "";
})