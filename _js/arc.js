window.onload = function () {
    //Referenciando o Canvas e conceito
    var canvas = document.getElementById('meu_canvas');
    var context = canvas.getContext('2d');

    //Cores e espessura
    context.fillStyle = 'gray';
    context.strokeStyle = 'black';
    context.lineWidth = 2;

    //Primeiro arco
    //Novo path
    context.beginPath();
    //Desenhando 1 arco
    context.arc(50,                 // x (centro)
                50,                 // y (centro)
                40,                 // raio
                90*Math.PI/180,     // 90 graus
                270*Math.PI/180,    // 270 graus
                false               // anti-horario
    );
    //Preenchimento
    context.fill();
    //Contorno
    context.stroke();

    //Segundo arco
    //Novo Path
    context.beginPath();
    //Desenhando 2 arco
    context.arc(150, 50, 40, 90*Math.PI/180, 270*Math.PI/180, true)
    //Preenchimento
    context.fill();
    //Contorno
    context.stroke();

    //Circunferencia
    //Novo Path
    context.beginPath();
    //Desenho circunferencia
    context.arc(250, 50, 40, 0, 2*Math.PI);
    //Preenchimento
    context.fill();
    //Contorno
    context.stroke();
};
