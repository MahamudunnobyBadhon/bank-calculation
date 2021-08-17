document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositText = document.getElementById('deposit-text').value;
    // console.log(parseFloat(depositText));
    if(parseFloat(depositText) > 0){
        const deposit = document.getElementById('deposit-value').innerText;
        const depositFinal = parseFloat(deposit) + parseFloat(depositText);
        // console.log(depositText);
        // console.log(deposit);
        // console.log(depositFinal);
        document.getElementById('deposit-value').innerText = depositFinal;
        const total = document.getElementById('total-value').innerText;
        const totalFinal = parseFloat(total) + parseFloat(depositText);
        document.getElementById('total-value').innerText = totalFinal ;
        
    }
    else{
        alert('please enter a number to be deposited');
    }

    document.getElementById('deposit-text').value = '';

})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawText = document.getElementById('withdraw-text').value;
    // console.log(typeof(withdrawText));
    // console.log(parseFloat(withdrawText));
    const currentTotal = document.getElementById('total-value').innerText;
   
    if(parseFloat(withdrawText) > 0){
        if(parseFloat(withdrawText) < currentTotal){
            const withdraw = document.getElementById('withdraw-value').innerText;
            const withdrawFinal = parseFloat(withdraw) + parseFloat(withdrawText);
            document.getElementById('withdraw-value').innerText = withdrawFinal;
            const total = document.getElementById('total-value').innerText;
            const totalFinal = parseFloat(total) - parseFloat(withdrawText);
            document.getElementById('total-value').innerText = totalFinal ;
        }
        else{
            alert("you don't have enough money");
        }      
    }
    else{
        alert('enter positive integer to be withdrawn');
    }
    document.getElementById('withdraw-text').value = '';
})