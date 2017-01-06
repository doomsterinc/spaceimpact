window.onload = function(){
    //Canvas e Contexto
    var canvas  = document.getElementById('meu_canvas');
    var context = canvas.getContext('2d');

    //propriedades do desenho
    var x = 20;
    var y = 100;
    var raio = 5;

    var anterior = new Date().getTime();

    //iniciar a animação
    requestAnimationFrame(mexerDesenho);

    //função de animação
    function mexerDesenho () {

        var agora = new Date().getDate();

        var decorrido = agora - anterior;

        //Limpar o Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        //Desenhar
        context.beginPath();
        context.arc(x, y, raio, 0, Math.PI*2);
        context.fill();

        //Deslocar 20 pixels por segundo
        var velocidade = 20;
        x += velocidade * decorrido / 1000;

        anterior = agora;

        //Chamar proximo ciclo da animação
        requestAnimationFrame(mexerDesenho);
    };
};
