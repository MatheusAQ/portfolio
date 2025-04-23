let numero = [2, 4, 5, 6]

// Função map
Array.prototype.meuMap = function (callback) {
    const novoArray = [];

    for (let i = 0; i < this.length; i++) {

        novoArray.push(callback(this[i], i, this));
    }

    return novoArray;
};


let dobrado = numero.meuMap(a => a * 2);
console.log(dobrado)


// Função filter

Array.prototype.meuFilter = function (callback) {
    const novoArray = [];

    for (let i = 0; i < this.length; i++) {

        if (callback(this[i], i, this)) {
            novoArray.push(this[i]);
        }
    }

    return novoArray;
}

let pares = numero.meuFilter(n => n % 2 === 0);

console.log(pares);


// Função filter

Array.prototype.meuReduce = function (callback, valorInicio) {
    let acumulador = valorInicio;
    let comecaDoIndice = 0;

    if (acumulador === undefined) {
        acumulador = this[0];
        comecaDoIndice = 1;
    }

    for (let i = comecaDoIndice; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this);
    }

    return acumulador;
}

const soma = numero.meuReduce((acc, val) => acc + val, 0);

console.log(soma);

// foreach

Array.prototype.meuForEach = function (callback) {


    for (let i = 0; i < this.length; i++) {

        callback(this[i], i, this);
    }

};


// find

Array.prototype.meuFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }

    return undefined;
};