// O clearInterval é uma função que cancela um timer que foi criado com o setInterval().

const timeOut = 1000;
const checking = () => console.log('checking!');

let interval = setInterval(checking, timeOut);
clearInterval(interval);