let totalScore = 0;
let message = '';

function equalCheck(userInput, random) {
    return new Promise((resolve, reject) => {
        if (userInput != random) {
            resolve('Oopz.. Better luck next time!');
        }
        else {
            reject('Congratulations..!');
        }
    })
}

function oneLessorMoreCheck(userInput, random) {
    return new Promise((resolve, reject) => {
        if (userInput - random == 1 || userInput - random == -1) {
            resolve('Great Work!');
        }
        else {
            reject('Oopz.. Better luck next time!');
        }
    })
}

async function playGame() {
    let userInput = document.getElementById('userInput').value;
    let random = Math.floor(Math.random() * 6) + 1;
    try {
        message = await equalCheck(userInput, random);
        message = await oneLessorMoreCheck(userInput, random);
        totalScore+=1;
    } catch (error) {
        message = error;
        if (message == 'Congratulations..!') {
            totalScore += 2;
        }
        else {
            totalScore += 0;
        }
    }

    document.getElementById('message').innerText = message;
    document.getElementById('message').style.fontFamily = 'Courgette, cursive';
    document.getElementById('message').style.fontWeight = 600;
    document.getElementById('random').innerText = 'Random number : ' + random;
    document.getElementById('score').innerText = 'Your Score : ' + totalScore;
}


function resetGame() {
    score = 0;
    message = '';
    document.getElementById('message').innerText = '';
    document.getElementById('random').innerText = '';
    document.getElementById('score').innerText = '';
    document.getElementById('userInput').value = '';
}