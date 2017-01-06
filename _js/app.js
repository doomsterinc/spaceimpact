window.onload = function () {
    //Referenciando o Canvas
    var canvas = document.getElementById('meu_canvas');

    //Obtendo o contexto gráfico
    var context = canvas.getContext('2d');

    //Preeenchendo com vermelho
    context.fillStyle = 'red';
    context.fillRect(50, 50, 100, 100);

    //Contorno azul com 3px de espessura
    context.lineWidth = 3;
    context.strokeStyle = 'blue';
    context.strokeRect(50, 50, 100, 100);

};
