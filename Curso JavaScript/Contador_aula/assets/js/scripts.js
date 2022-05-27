var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
const subtrai = document.getElementById("decrement");
const adiciona = document.getElementById("increment");

subtrai.addEventListener("click", function(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber<0){
        document.getElementById('currentNumber').style.color = 'red'
    }
});

adiciona.addEventListener("click", function(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 0 ){
        document.getElementById('currentNumber').style.color = 'black'
    }
});

