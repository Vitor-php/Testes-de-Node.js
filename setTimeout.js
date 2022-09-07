// o setTimeOut é uma função que recebe dois parâmetros, o primeiro é uma função e o segundo é o tempo em milisegundos
const timeOut = 3000;
const finished = () => console.log('Done!');

setTimeout(finished, timeOut);