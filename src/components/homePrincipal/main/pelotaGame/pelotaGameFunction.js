const pelotaGameFunction = () => {
    window.addEventListener('keydown', (e) => {  
        if (e.keyCode === 32 && e.target === document.body) {  
          e.preventDefault();  
        }  
      });


    var time = new Date();
    var deltaTime = 0;
    
    if(document.readyState === "complete" || document.readyState === "interactive"){
        setTimeout(Init, 1);
    }else{
        document.addEventListener("DOMContentLoaded", Init); 
    }
    

    function Loop() {
        deltaTime = (new Date() - time) / 1000;
        time = new Date();
        Update();
        requestAnimationFrame(Loop);
    }
    
    const StartGame = document.querySelector(".StartGame")



    function Init() {

        StartGame.classList.remove("pelota_game-corriendo");
        StartGame.classList.remove("startInit")
        StartGame.addEventListener("click", function(){
            time = new Date();
            Start();
            Loop();
            StartGame.classList.add("pelota_game-corriendo");
            StartGame.classList.add("startInit")
        })

    }
    

    //****** GAME LOGIC ********//
    
    var sueloY = 12;
    var velY = 0;
    var impulso = 950;
    var gravedad = 2300;
    
    var pelota_gamePosX = 300;
    var pelota_gamePosY = sueloY; 
    
    var sueloX = 0;
    var velEscenario = 1280/3;
    var gameVel = 1;
    var score = 0;
    
    var parado = false;
    var saltando = false;
    
    var tiempoHastaObstaculo = 3;
    var tiempoObstaculoMin = 2.5;
    var tiempoObstaculoMax = 5;
    var obstaculoPosY = 16;
    var obstaculos = [];
    
    var tiempoHastaNube = 0.5;
    var tiempoNubeMin = 0.7;
    var tiempoNubeMax = 2.7;
    var maxNubeY = 270;
    var minNubeY = 100;
    var nubes = [];
    var velNube = 0.5;
    
    var contenedor;
    var pelota_game;
    var textoScore;
    var suelo;
    var gameOver;
    
    function Start() {
        gameOver = document.querySelector(".game-over");
        suelo = document.querySelector(".suelo");
        contenedor = document.querySelector(".contenedor");
        textoScore = document.querySelector(".score");
        pelota_game = document.querySelector(".pelota_game");
        document.addEventListener("keydown", HandleKeyDown);
    }

    const restart = document.querySelector(".restart")
    
    function Update() {

        if(parado) return;
        
        Moverpelota_game();
        MoverSuelo();
        DecidirCrearObstaculos();
        DecidirCrearNubes();
        MoverObstaculos();
        MoverNubes();
        DetectarColision();
        
        velY -= gravedad * deltaTime;
             
    }
    
    function HandleKeyDown(ev){
        if(ev.keyCode == 32){
            Saltar();
        }
    }
    
    function Saltar(){
        if(pelota_gamePosY === sueloY){
            saltando = true;
            velY = impulso;
            pelota_game.classList.remove("pelota_game-corriendo");
        }
    }
    
    function Moverpelota_game() {
        pelota_gamePosY += velY * deltaTime;
        if(pelota_gamePosY < sueloY){
            
            TocarSuelo();
        }
        pelota_game.style.bottom = pelota_gamePosY+"px";
    }
    
    function TocarSuelo() {
        pelota_gamePosY = sueloY;
        velY = 0;
        if(saltando){
            pelota_game.classList.add("pelota_game-corriendo");
        }
        saltando = false;
    }
    
    function MoverSuelo() {
        sueloX += CalcularDesplazamiento();
        suelo.style.left = -(sueloX % contenedor.clientWidth) + "px";
    }
    
    function CalcularDesplazamiento() {
        return velEscenario * deltaTime * gameVel;
    }
    
    function Estrellarse() {
        pelota_game.classList.remove("pelota_game-corriendo");
        pelota_game.classList.add("pelota_game-estrellado");
        parado = true;
        restart.classList.add("restartInit")
    }
    
    function DecidirCrearObstaculos() {
        tiempoHastaObstaculo -= deltaTime;
        if(tiempoHastaObstaculo <= 0) {
            CrearObstaculo();
        }
    }
    
    function DecidirCrearNubes() {
        tiempoHastaNube -= deltaTime;
        if(tiempoHastaNube <= 0) {
            CrearNube();
        }
    }
    
    function CrearObstaculo() {
        var obstaculo = document.createElement("div");
        contenedor.appendChild(obstaculo);
        obstaculo.classList.add("cactus");
        if(Math.random() > 0.5) obstaculo.classList.add("cactus2");
        obstaculo.posX = contenedor.clientWidth;
        obstaculo.style.left = contenedor.clientWidth+"px";
    
        obstaculos.push(obstaculo);
        tiempoHastaObstaculo = tiempoObstaculoMin + Math.random() * (tiempoObstaculoMax-tiempoObstaculoMin) / gameVel;
    }
    
    function CrearNube() {
        var nube = document.createElement("div");
        contenedor.appendChild(nube);
        nube.classList.add("nube");
        nube.posX = contenedor.clientWidth;
        nube.style.left = contenedor.clientWidth+"px";
        nube.style.bottom = minNubeY + Math.random() * (maxNubeY-minNubeY)+"px";
        
        nubes.push(nube);
        tiempoHastaNube = tiempoNubeMin + Math.random() * (tiempoNubeMax-tiempoNubeMin) / gameVel;
    }
    
    function MoverObstaculos() {
        for (var i = obstaculos.length - 1; i >= 0; i--) {
            if(obstaculos[i].posX < -obstaculos[i].clientWidth) {
                obstaculos[i].parentNode.removeChild(obstaculos[i]);
                obstaculos.splice(i, 1);
                GanarPuntos();
            }else{
                obstaculos[i].posX -= CalcularDesplazamiento();
                obstaculos[i].style.left = obstaculos[i].posX+"px";
            }
        }
    }
    
    function MoverNubes() {
        for (var i = nubes.length - 1; i >= 0; i--) {
            if(nubes[i].posX < -nubes[i].clientWidth) {
                nubes[i].parentNode.removeChild(nubes[i]);
                nubes.splice(i, 1);
            }else{
                nubes[i].posX -= CalcularDesplazamiento() * velNube;
                nubes[i].style.left = nubes[i].posX+"px";
            }
        }
    }
    
    function GanarPuntos() {
        score++;
        textoScore.innerText = score;
        if(score == 5){
            gameVel = 1.5;
            contenedor.classList.add("mediodia");
        }else if(score == 10) {
            gameVel = 2;
            contenedor.classList.add("tarde");
        } else if(score == 20) {
            gameVel = 3;
            contenedor.classList.add("noche");
        }
        suelo.style.animationDuration = (3/gameVel)+"s";
    }
    
    function GameOver() {
        Estrellarse();
        gameOver.style.display = "block";
    }
    
    function DetectarColision() {
        for (var i = 0; i < obstaculos.length; i++) {
            if(obstaculos[i].posX > pelota_gamePosX + pelota_game.clientWidth) {
                //EVADE
                break; //al estar en orden, no puede chocar con más
            }else{
                if(IsCollision(pelota_game, obstaculos[i], 10, 30, 15, 20)) {
                    GameOver();
                }
            }
        }
    }
    
    function IsCollision(a, b, paddingTop, paddingRight, paddingBottom, paddingLeft) {
        var aRect = a.getBoundingClientRect();
        var bRect = b.getBoundingClientRect();
    
        return !(
            ((aRect.top + aRect.height - paddingBottom) < (bRect.top)) ||
            (aRect.top + paddingTop > (bRect.top + bRect.height)) ||
            ((aRect.left + aRect.width - paddingRight) < bRect.left) ||
            (aRect.left + paddingLeft > (bRect.left + bRect.width))
        );
    }
    

}

export default pelotaGameFunction