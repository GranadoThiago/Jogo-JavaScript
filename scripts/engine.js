var folhaDesenho = document.getElementById("folha");
var areaDesenho = folhaDesenho.getContext("2d"); 

/* Configura a cor de fundo do campo */
areaDesenho.fillStyle = "#286047";
areaDesenho.fillRect(0, 0, folhaDesenho.width, folhaDesenho.height);

/* Configura linha central do campo */
areaDesenho.fillStyle = "#FFFFFF";
areaDesenho. fillRect (297.5, 0, 5, 500);

/* Desenha o jogador 1 */
areaDesenho.fillStyle = "#FFFFFF";
areaDesenho.fillRect(10, 200, 10, 100);

/* Desenha o jogador 2 */
areaDesenho.fillStyle = "#FFFFFF";
areaDesenho.fillRect(575, 200, 10, 100);

/* Desenha a bola */   
areaDesenho.beginPath();
areaDesenho.arc(300, 250, 10, 0, 2 * Math.PI);
areaDesenho.fill();


