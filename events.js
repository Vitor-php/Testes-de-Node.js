const { EventEmitter } = require('events');
const emitter = new EventEmitter();

emitter.on('saySomething', (message) => { // on é usado para ouvir sempre e once para ouvir uma unica vez
    console.log('Eu ouvi você!', message)
});

emitter.emit('saySomething', 'Vitão');