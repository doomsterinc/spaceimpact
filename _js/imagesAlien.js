//Canvas e Contexto
var canvas = document.getElementById('meu_canvas');
var context = canvas.getContext('2d');

//Carregar a imagem
var imagem = new Image();
imagem.src = '../_img/ovni.png';
imagem.onload = function () {
    //imagem começa em 20
    var x = 20;
    //Desenhando a imagem
    for(var i = 1; 1 <= 5; i++){
        context.drawImage(imagem, x, 20, 64, 32);
        x += 70;
    }
};
