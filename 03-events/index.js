const EventEmitter = require('events');

class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';

meuEmissor.on(nomeEvento, (click) => {
    console.log(`Um usuário clickou, ${click}`)
});




setInterval(() => {
    meuEmissor.emit(nomeEvento, 'na barra de rolagem');
    meuEmissor.emit(nomeEvento, 'no ok');
},1000);