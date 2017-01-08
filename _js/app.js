window.onload = function () {
                    //referencias do canvas
                var canvas = document.getElementById('canvas_animacao');
                var context = canvas.getContext('2d');

                //criando alguns sprites
                var b1 = new Bola(context);
                b1.x = 100;
                b1.y = 200;
                b1.velocidadeX = 20;
                b1.velocidadeY = -10;
                b1.color = 'red';
                b1.raio = 20;

                var b2 = new Bola(context);
                b2.x = 200;
                b2.y = 100;
                b2.velocidadeX = -5;
                b2.velocidadeY = -5;
                b2.color = 'blue';
                b2.raio = 30;

                //criando o loop da animação
                var animacao = new Animacao(context);
                animacao.novoSprite(b1);
                animacao.novoSprite(b2);

                //ligar a animação
                animacao.ligar();


}
