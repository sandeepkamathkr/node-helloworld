const EventEmitter = require('node:events');
const myEmitter = new EventEmitter();

myEmitter.on('lunch', () => {
    console.log('yummy !!!!!');
})

myEmitter.emit('lunch');
myEmitter.emit('lunch');
