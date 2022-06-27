// While e Do While

function random(min, max) {
    let i = Math.round(Math.random() * (max - min) + min);
    return i;
}

let rand = random(1, 50);

while (rand !== 10) {
    rand = random(1, 50);
    console.log(rand);
}

// While -> Checa a condição e depois executa
// Do While -> Executa e depois checa a condição