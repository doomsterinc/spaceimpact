window.onload = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var posicao = 0;
    desenharPersonagem();

    var teclado = new Teclado(document);

    requestAnimationFrame(animar);

    function animar () {
        if(teclado.pressionada(SETA_ESQUERDA)){
            posicao -= 10;
        } else if (teclado.pressionada(SETA_DIREITA)){
            posicao += 10;
        }

        desenharPersonagem();
        requestAnimationFrame(animar);
    }

    function desenharPersonagem () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(posicao, 100, 20, 50);
    }
}
