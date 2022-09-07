// O clearTimeout() é uma função que cancela um timer que foi criado com o setTimeout().
const timeOut = 3000;
const finished = () => console.log('Done!');

let timer = setTimeout(finished, timeOut);
clearTimeout(timer); 