window.onload = function () {
                    var canvas = document.getElementById('canvas');
                var context = canvas.getContext('2d');

                //posicao inicial do personagem
                var posicao = 0;
                desenharPersonagem();

                document.addEventListener('keydown', function(evento){
                   if(evento.keyCode == 37){
                       posicao -= 10;
                       desenharPersonagem();
                   } else if (evento.keyCode == 39){
                       posicao += 10;
                       desenharPersonagem();
                   }
                });

                //personagem para testes
                function desenharPersonagem () {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.fillRect(posicao, 100, 20, 50);
                }
}
