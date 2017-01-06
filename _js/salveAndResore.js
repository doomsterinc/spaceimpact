window.onload = function(){

    //Canvas e Contexto
    var canvas = document.getElementById('meu_canvas');
    var context = canvas.getContext('2d');

    //Quadradinho Verde
    context.fillStyle = 'green';
    context.fillRect(50, 50, 25, 25);

    //Salva a configuração e a sobe na pilha
    context.save();

    //Quadradinho roxo
    context.fillStyle = 'purple';
    context.fillRect(100, 50, 25, 25);

    //Volta pro nivel anterior da pilha
    context.restore();
    //Volta para o verde

    context.fillRect(150, 50, 25, 25);

};
