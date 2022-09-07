// O setInterval irá rodar uma função N vezes, com um intervalo de tempo entre cada execução.

const timeOut = 1000;
const checking = () => console.log('checking!');

let timer = setInterval(checking, timeOut);