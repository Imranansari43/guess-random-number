const guess = document.querySelector('.number');
const submit = document.querySelector('.submit');
const message = document.querySelector('#message');
const previous = document.querySelector('#previous');


function remove(){
    playTime.forEach(()=>{
        playTime.pop();
    })
}
const playTime = [];

function randNumber(){
    const randomNumber =Math.floor((Math.random()*100+1));
    console.log(randomNumber);

submit.addEventListener('click', ()=>{
    if(guess.value == "" || guess.value == NaN){
        message.innerHTML = `please enter a valid number`;
    }else if(playTime.length == 10){
        message.innerHTML = `gameover`;
        playTime.forEach(()=>{
            playTime.pop();
        })
        randNumber();
        previous.innerHTML = ``
        alert('game over');
    }else if(randomNumber == guess.value){
        message.innerHTML = `congrats you won the game`;
        randNumber();
        remove();
        alert('start new game');
    }else if(randomNumber > guess.value){
        message.innerHTML = `you guess short number`;
        playTime.push(guess.value);
        playTime.forEach((t)=>{
            previous.innerHTML = ` ${t},`;
        })
    }else if(randomNumber < guess.value){
        message.innerHTML = `you guess long value`;
        playTime.push(guess.value);
        playTime.forEach((t)=>{
            previous.innerHTML = ` ${t},`;
        })
    }
    
    console.log(playTime);
})
}
randNumber();