document.getElementById("btn-deposit").addEventListener("click", function () {
  // step -2 : get the deposit amount from the deposit input field
  // for input field use value to the value inside the input field
  const depositField = document.getElementById("deposit-Field");
  const newDepositAmount = depositField.value;
  // step - 3: Get the current deposit total
  // for non-input(element other than input,textarea) use innerText to get the text

  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotal = depositTotalElement.innerHTML;

  // previous value and current value added (integer not a string)

  const currentDepositTotal =
    parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
    // set the deposit total 
    depositTotalElement.innerHTML = currentDepositTotal;
    
  // step - 5: get balance current total
    
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotal = balanceTotalElement.innerText;

  // step - 6: calculate current total balance
    
  const currentBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);
    
    // set the balance total 
    balanceTotalElement.innerText = currentBalanceTotal
    
  // step - 7 : clear the deposit field
  depositField.value = "";
});
