const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backBody = estilosBody.backgroundColor;
console.log(backBody)

// Versão do Lucas
//paragrafos.style.backgroundColor = "rgb(17, 86, 102)";
//paragrafos.style.color = 'white'

// Versão professor
for (let p of ps) {
    p.style.backgroundColor = backBody;
    p.style.color = '#FFFFFF';
};