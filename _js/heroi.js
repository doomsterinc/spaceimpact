function Heroi (context, teclado) {
    this.context = context;
    this.teclado = teclado;
    this.x = 0;
    this.y = 0;
}

Heroi.prototype = {
    atualizar: function () {
        if (this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0) {
            this.x -= 10;
        }else if (this.teclado.pressionada(SETA_DIREITA) && this.x < this.context.canvas.width - 20) {
            this.x += 10;
        }
    },
    desenhar: function () {
        this.context.fillRect(this.x, this.y, 20, 50);
    },
    atirar: function () {
        var tiro = new Bola(this.context);
        tiro.x = this.x + 10;
        tiro.y = this.y + 10; tiro.raio = 2;
        tiro.cor = 'red';
        if (this.teclado.pressionada(SETA_ESQUERDA))
            tiro.velocidadeX = -20;
        else
            tiro.velocidadeX = 20;

        // Não tenho como incluir nada na animação!
        this.animacao.novoSprite(tiro);
    }
}
