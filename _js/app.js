window.onload = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var teclado = new Teclado(document);
    var animacao = new Animacao(context);

    //Sprite le o teclado para saber como se comportar
    var heroi = new Heroi(context, teclado);
    heroi.x = 0;
    heroi.y = 100;
    animacao.novoSprite(heroi);

    teclado.disparou(ESPACO, function(){
        heroi.atirar();
    });

    animacao.ligar();
}
