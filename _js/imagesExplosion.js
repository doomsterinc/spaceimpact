//Canvas e contexto
var canvas = document.getElementById('meu_canvas');
var context = canvas.getContext('2d');

//Carregando a imagem
var imagem = new Image();
imagem.src = '../_img/explosao.png';
imagem.onload = function () {
    context.drawImage(
        imagem,
        80, 10, 60, 65, //Area de recorte (clipping)
        20, 20, 60, 65  //Desenho do canvas
    );
};
