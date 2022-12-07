//get input from deposit and withdraw
  function getInput(inputId) {
  const inputField = document.getElementById(inputId);
  const newAmount = parseFloat(inputField.value);
// clear theinput field
  inputField.value = "";
  return newAmount;
  }
//update total deposit and withdraw field
  function updateField(totalFieldId, newInput) {
  const totalUpdateValue = document.getElementById(totalFieldId);
  const previousValue = parseFloat(totalUpdateValue.innerText);
  const newValue = previousValue + newInput;
  totalUpdateValue.innerText = newValue;
  }
//update balance
  function updateBalance(newValue, add) {
  const totalBalance = document.getElementById("balance-total");
  const previousBalance = parseFloat(totalBalance.innerText);
  if (add == true) {
    totalBalance.innerText = previousBalance + newValue;
  } else {
    totalBalance.innerText = previousBalance - newValue;
  }
 }
// handle deposit button event
  document.getElementById("deposit-button").addEventListener("click", function () {
//taking input
    const newDepositAmount = getInput("deposit-input");
    if (newDepositAmount > 0) {
//update total deposit field
    updateField("deposit-total", newDepositAmount);
// update account balance
    updateBalance(newDepositAmount, true);
    } else {
    alert("Please input White Money");
    }
  });

// handle withdraw event handler
  document.getElementById("withdraw-button").addEventListener("click", function () {
//taking input
    const newWithdrawAmount = getInput("withdraw-input");
    if (newWithdrawAmount > 0) {
//update total deposit field
    updateField("withdraw-total", newWithdrawAmount);
// update balance
    updateBalance(newWithdrawAmount, false);
    } else {
    alert("Please input White Money");
    }
  });
