let firstNum 
let secondNum;

function setRandNum() {
    firstNum = parseInt(Math.random()*10);
    secondNum = parseInt(Math.random()*10);

    document.querySelector('.first__num').textContent = firstNum;
    document.querySelector('.second__num').textContent = secondNum;

}

setRandNum();

function onClick() {
    const value = document.querySelector('.answer').value;
    if (value == firstNum * secondNum){
        document.querySelector('.result').textContent = "딩동댕"
        setRandNum();
        document.querySelector('.answer').value = '';
    }
    else{
        document.querySelector('.result').textContent = "땡"
    }
}