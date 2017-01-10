function Animacao (context) {
    this.context = context;
    this.sprites = [];
    this.ligado = false;
}

Animacao.prototype = {
    novoSprite: function (sprite) {
        this.sprites.push(sprite);
    },
    ligar: function () {
        this.ligado = true;
        this.proximoFrame();
    },
    desligar: function () {
        this.ligado = false;
    },
    proximoFrame: function () {
        // se for continuar
        if(!this.ligado) return;

        // a cada ciclo, limpamos a tela ou desenhamos o fundo
        this.limparTela();

        // atualizamos o estado das sprites
        for(var i in this.sprites)
            this.sprites[i].atualizar();

        // desenhamos os sprites
        for(var i in this.sprites)
            this.sprites[i].desenhar();

        // chamamos o procimo ciclo
        var animacao = this;
        requestAnimationFrame(function(){
            animacao.proximoFrame();
        });
    },
    limparTela: function () {
        var ctx = this.context; //pra facilitar a escrita ;)
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}
