const pelotaGameFunction = () => {
    window.addEventListener('keydown', (e) => {  
        if (e.keyCode === 32 && e.target === document.body) {  
          e.preventDefault();  
        }  
      });

      const StartGame = document.querySelector(".StartGame")
      let pelotaGame = document.querySelector(".pelota_game")
      const restart = document.querySelector(".restart")
      const cono = document.querySelectorAll(".cono")


    let sueloY = 12;
    let velY = .5;
    let impulso = 900;
    let gravedad = 2300;
    let pelota_gamePosX = 300;
    let pelota_gamePosY = sueloY; 
    let sueloX = 0;
    let velEscenario = 1280/3;
    let gameVel = 1;
    let score = 0;
    let parado = false;
    let saltando = false;
    let tiempoHastaObstaculo = 2;
    let tiempoObstaculoMin = 1.5;
    let tiempoObstaculoMax = 4;
    let obstaculoPosY = 16;
    let obstaculos = [];
    let tiempoHastaNube = 0.5;
    let tiempoNubeMin = 0.7;
    let tiempoNubeMax = 2.7;
    let maxNubeY = 270;
    let minNubeY = 100;
    let nubes = [];
    let velNube = 0.5;
    let contenedor;
    let pelota_game;
    let textoScore;
    let suelo;
    let gameOver;



    let time = new Date();
    let deltaTime = 0;
    
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
    


    function Init() {
        const score = document.querySelector(".score")

        time = new Date();
        Start();
        Loop();
        StartGame.classList.add("startInit")
        pelotaGame.classList.toggle("pelota_game_active")
        score.classList.toggle("score_active")
        pelota_game.classList.add("pelota_game-corriendo");
    }
    

    //****** GAME LOGIC ********//
    
    
    function Start() {
        gameOver = document.querySelector(".game-over");
        suelo = document.querySelector(".suelo");
        contenedor = document.querySelector(".contenedor");
        textoScore = document.querySelector(".score");
        pelota_game = document.querySelector(".pelota_game");
        document.addEventListener("keydown", HandleKeyDown);
        document.addEventListener("click", handleEvent);
    }

    
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

    function handleEvent(e){

        Saltar()
  
       }


    function HandleKeyDown(ev){
        if(ev.keyCode==32){
            Saltar();
         }

         if(ev.keyCode==38){
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
        obstaculo.classList.add("cono");
        if ((Math.random() > .5) && (score >= 5)){
            obstaculo.classList.add("cono2");
        } 
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
            tiempoObstaculoMin = 2;
            tiempoHastaObstaculo = 4;
            tiempoObstaculoMax = 3;
            contenedor.classList.add("mediodia");
   
        }else if(score == 15) {
            gameVel = 2;
            contenedor.classList.add("tarde");
            tiempoObstaculoMin = 1;
            tiempoHastaObstaculo = 1.9;
            tiempoObstaculoMax = 3.5;
        } else if(score == 25) {
            gameVel = 3;
            contenedor.classList.add("noche");
            tiempoObstaculoMin = 1;
            tiempoHastaObstaculo = 1.8;
            tiempoObstaculoMax = 3;
        }else if(score == 35) {
            gameVel = 4;
            contenedor.classList.add("level-up4");
            tiempoObstaculoMin = 1;
            tiempoHastaObstaculo = 1.8;
            tiempoObstaculoMax = 2.5;
        }
        else if(score == 50) {
            gameVel = 5;
            contenedor.classList.add("level-up5");
            tiempoObstaculoMin = .9;
            tiempoHastaObstaculo = 1.8;
            tiempoObstaculoMax = 2.2;
        }
        else if(score == 75) {
            gameVel = 6;
            contenedor.classList.add("level-up6");
            tiempoObstaculoMin = .8;
            tiempoHastaObstaculo = 1.8;
            tiempoObstaculoMax = 2;
        }  else if(score == 100) {
            gameVel = 7;
            contenedor.classList.add("level-up7");
            tiempoObstaculoMin = .6;
            tiempoHastaObstaculo = 1.8;
            tiempoObstaculoMax = 1.9;
        }
        
        suelo.style.animationDuration = (3/gameVel)+"s";
        pelotaGame.style.animationDuration =(3/gameVel)+"s"
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
                if(IsCollision(pelota_game, obstaculos[i], 30, 30, 30, 30)) {
                    GameOver();
                    pelotaGame.classList.toggle("pelota_game_desactive")
                
                }
            }
        }
    }
    
    function IsCollision(a, b, paddingTop, paddingRight, paddingBottom, paddingLeft) {
        var aRect = a.getBoundingClientRect();
        var bRect = b.getBoundingClientRect();
    
        return !(
            ((aRect.top + aRect.height - paddingBottom) < (bRect.top)) ||
            (aRect.top + paddingTop > (bRect.top + bRect.height )) ||
            ((aRect.left + aRect.width - paddingRight) < bRect.left) ||
            (aRect.left + paddingLeft > (bRect.left + bRect.width))
        );
    }
        


            
    restart.addEventListener("click", function(){
        sueloY = 12;
        velY = .5;
        impulso = 950;
        gravedad = 2300
        pelota_gamePosX = 300;
        pelota_gamePosY = sueloY;
        sueloX = 0;
        velEscenario = 1280/3;
        gameVel = 1;
        score = 0
        parado = false;
        saltando = false
        tiempoHastaObstaculo = 2;
        tiempoObstaculoMin = 1.5;
        tiempoObstaculoMax = 4;
        obstaculoPosY = 16;
        obstaculos = []
        tiempoHastaNube = 0.5;
        tiempoNubeMin = 0.7;
        tiempoNubeMax = 2.7;
        maxNubeY = 270;
        minNubeY = 100;
        nubes = [];
        velNube = 0.5;

        document.querySelectorAll(".cono").forEach(e => e.remove())
        document.querySelectorAll(".cono2").forEach(e => e.remove())
        document.querySelectorAll(".nube").forEach(e => e.remove())

        gameOver.style.display = "none";

        pelotaGame.classList.remove("pelota_game_desactive")
        pelotaGame.classList.add("pelota_game_active")
        score = 0
        textoScore.innerText = score;


        restart.classList.remove("restartInit")
        contenedor.classList.remove("tarde");
        contenedor.classList.remove("noche");
        contenedor.classList.remove("mediodia");
        contenedor.classList.remove("level-up4");
        contenedor.classList.remove("level-up5");
        contenedor.classList.remove("level-up6");
        contenedor.classList.remove("level-up7");


        suelo.style.animationDuration = (3/gameVel)+"s";
        pelotaGame.style.animationDuration =(3/gameVel)+"s"

        for (var i=0 ;  i < obstaculos.length ; i++) {
                obstaculos[i].parentNode.removeChild(obstaculos[i]);
        }
        
    })

}

export default pelotaGameFunction