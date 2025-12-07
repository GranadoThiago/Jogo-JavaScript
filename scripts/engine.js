window.onload = function() {
    this.setInterval(executarJogo, 1000/30);
};

var posicaoBolaX = posicaoBolaY = 10;

function executarJogo() {
    var folhaDesenho = document.getElementById("folha");
    var areaDesenho = folhaDesenho.getContext("2d"); 
    var larguraCampo = 600;
    var alturaCampo = 500; 
    var espessuraRede = 5;
    var alturaRaquete = 10;
    var diametroBola = 10;

    /* Configura a cor de fundo do campo */
    areaDesenho.fillStyle = "#286047";
    areaDesenho.fillRect(0, 0, larguraCampo, alturaCampo);

    /* Configura a cor das linhas do campo */
    areaDesenho.fillStyle = "#FFFFFF";

    /* Configura linha central do campo */
    areaDesenho. fillRect (larguraCampo/2 - espessuraRede/2, 0, espessuraRede, alturaCampo);

    /* Jogador 1 */
    areaDesenho.fillRect(10, 200, alturaRaquete, 100);

    /* Jogador 2 */
    areaDesenho.fillRect(580, 200, alturaRaquete, 100);

    /* Desenha a bola */
    areaDesenho.fillRect(posicaoBolaX - diametroBola/2, posicaoBolaY - diametroBola/2, diametroBola, diametroBola);   
    //areaDesenho.beginPath();
    //areaDesenho.arc(300, 250, 10, 0, 2 * Math.PI);
    //areaDesenho.fill();

    posicaoBolaX = posicaoBolaX + 1;
    posicaoBolaY = posicaoBolaY + 1;
};




