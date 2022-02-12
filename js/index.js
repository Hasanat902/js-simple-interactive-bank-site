// handle deposit button event
document.getElementById("deposit-button").addEventListener("click", function(){
    
    const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    const depositTotal = document.getElementById("deposit-total");
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    depositTotal.innerText = previousDepositAmount + depositAmount;

    //update balance
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText);

    balanceTotal.innerText = previousBalance + depositAmount;


    //clear deposit amount
    depositInput.value = "";
});