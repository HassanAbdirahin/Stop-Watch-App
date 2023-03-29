let seconds = 00;
let tens = 00;
let appendTens = document.querySelector('#tens');
let appendSeconds = document.querySelector('#seconds');

let ButtonStart = document.querySelector('#button-start');
let ButtonStop = document.querySelector('#button-stop');
let ButtonReset = document.querySelector('#button-reset');

let interval; // to store time values

// This function will run when start is clicked

function startTime(){
    tens++;
    if(tens < 9){
        appendTens.innerHTML = '0' + tens;
    }
    if(tens > 9){
        appendTens.innerHTML = tens;
    }

    if(tens > 99){
        seconds ++;
        appendSeconds.innerHTML = '0' + seconds;
        tens = 0;
        appendTens.innerHTML = '0' + 0;
    }

    if (seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
}

ButtonStart.addEventListener('click', function(){
    interval = setInterval(startTime);
})

ButtonStop.addEventListener('click', function(){
    clearInterval(interval);
})

ButtonReset.addEventListener('click', function(){
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
})