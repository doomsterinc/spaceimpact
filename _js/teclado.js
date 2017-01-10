//codigos de teclas
var SETA_ESQUERDA = 37;
var SETA_DIREITA = 39;

function Teclado (elemento) {
    this.elemento = elemento;

    //array de teclas apertadas
    this.pressionadas = [];

    //registrando o estado das teclas no array
    var teclado = this;
    elemento.addEventListener('keydown', function (evento) {
        teclado.pressionadas[evento.keyCode] = true;
    });
    elemento.addEventListener('keyup', function (evento) {
       teclado.pressionadas[evento.keyCode] = false;
    });
}

Teclado.prototype = {
    pressionada : function (tecla) {
        return this.pressionadas[tecla];
    }
}