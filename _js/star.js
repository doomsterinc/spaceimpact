window.onload = function () {
    //Referenciando o Canvas
    var canvas = document.getElementById('meu_canvas');

    //Obtendo o contexto gráfico
    var context = canvas.getContext('2d');

    //Inicia um novo path (apagando desenhos anteriores)
    context.beginPath();

    //Desenhando uma estrela
    //Ponto inicial
    context.moveTo(75, 250);
    context.lineTo(150, 50);
    context.lineTo(225, 250);
    context.lineTo(50, 120);
    context.lineTo(250, 120);
    context.lineTo(75, 250);

    //Configura a linha;
    context.lineWidth = 2;
    context.strokeStyle = 'red';

    //Traçar todas as linhas do caminho
    context.stroke();

};
