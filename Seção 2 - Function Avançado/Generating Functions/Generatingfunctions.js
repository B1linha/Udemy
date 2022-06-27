function* geradora1() {
    // Código qualquer
    yield 'Valor 1';
    // Código qualquer
    yield 'Valor 2';
    // Código qualquer
    yield 'Valor 3';
}

function* geradora2() {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield*geradora3();
    yield 3;
    yield 4;
    yield 5;
}

function* geradora5() {

    yield function() {
        console.log('Vim do Y1')    
    };

    //...

    yield function() {
        console.log('Vim do Y2')
    };
}

const g1 = geradora1(); 
const g2 = geradora2();
const g3 = geradora3();
const g4 = geradora4();
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
/* console.log(g1.next().value);
console.log(g1.next().value); 
console.log(g1.next());
console.log(g1.next()); */ 

// .next() é um método para ver os valores

/*for (let valor of g1) {
    console.log(valor);
}*/

//console.log(g2.next().value);

/*for (valor of g4) {
    console.log(valor)
}*/

func1();
func2();