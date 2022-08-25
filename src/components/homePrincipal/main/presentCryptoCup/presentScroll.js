import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const tournamentScroll = () =>{

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (!isMobile()) {


        const presetEffectBall = () => {

 
                /**/ /* ---- CORE ---- */
                /**/ const canvas = document.querySelector('.effectLogo');
                /**/ const context = canvas.getContext('2d');
                /**/ let windowWidth = canvas.width = window.innerWidth;
                /**/ let windowHeight = canvas.height = window.innerHeight;
                /**/ canvas.id = 'canvas';
                /**/ /* ---- CORE END ---- */
                /* ---- CREATING ZONE ---- */
        
                /* ---- SETTINGS ---- */
                const numberParticlesStart = 200;
                const particleSpeed = 0.5;
                const velocity =.5;
                const circleWidth = 48;
        
                /* ---- INIT ---- */
                let particles = [];
        
                const getRandomFloat = (min, max) => (Math.random() * (max - min) + min);
        
        
                /* ---- Particle ---- */
                function Particle(x, y) {
                    this.x = x;
                    this.y = y;
        
                    this.vel = {
                        x : getRandomFloat(-20, 20)/100,
                        y : getRandomFloat(-20, 10)/100,
                        min : getRandomFloat(2, 10),
                        max : getRandomFloat(10, 100)/10
                    }
        
                this.color = '#632aff18';
                }
        
                Particle.prototype.render = function() {
                    context.beginPath();
                    context.fillStyle = this.color;
                    context.arc(this.x, this.y, 1, 0, Math.PI * 2);
                    context.fill();
                };
        
                Particle.prototype.update = function() {
        
                    const forceDirection = {
                        x: getRandomFloat(-1, 1),
                        y: getRandomFloat(-1, 1),
                    };
        
                    if (Math.abs(this.vel.x + forceDirection.x) < this.vel.max) {
                        this.vel.x += forceDirection.x;
                    }
                    if (Math.abs(this.vel.y + forceDirection.y) < this.vel.max) {
                        this.vel.y += forceDirection.y;
                    }
        
                    this.x += this.vel.x * particleSpeed;
                    this.y += this.vel.y * particleSpeed;
        
                    if (Math.abs(this.vel.x) > this.vel.min) {
                        this.vel.x *= velocity;
                    }
                    if (Math.abs(this.vel.y) > this.vel.min) {
                        this.vel.y *= velocity;
                    }
        
                    this.testBorder();
                };
        
        
                Particle.prototype.testBorder = function() {
                    if (this.x > windowWidth) {
                        this.setPosition(this.x, 'x');
                    } else if (this.x < 0) {
                        this.setPosition(windowWidth, 'x');
                    }
                    if (this.y > windowHeight) {
                        this.setPosition(this.y, 'y');
                    } else if (this.y < 0) {
                        this.setPosition(windowHeight, 'y');
                    }
                };
        
        
                Particle.prototype.setPosition = function(pos, coor) {
                    if (coor === 'x') {
                        this.x = pos;
                    } else if (coor === 'y') {
                        this.y = pos;
                    } 
                };
        
                /* ---- Functions ----*/
        
                let pause = false
        
                function loop() {
        
                    if (!pause){
                        let i ;
                        const length = particles.length;
            
                        for (i = 0; i < length ; i++) {
                            particles[i].update();
                            particles[i].render();
                        }
                        requestAnimationFrame(loop);
                    }
        
                }
        
        
                function stop() {
                    setTimeout(() => {
                        pause = true;
                    }, 12000);
              
                }
        
                stop()
        
                /* ---- START ---- */
                function init() {
                    let i;
                    for (i = 0; i < numberParticlesStart ; i++) {
                        const angle = Math.random() * 360;
                            particles.push(new Particle(
                            windowWidth * 0.5 + (Math.cos(angle) * circleWidth),
                            windowHeight * 0.5 - (Math.sin(angle) * circleWidth),
                        ));
                    }
                }
        
                init();
        
                window.onresize = () => {
                    windowWidth = canvas.width = window.innerWidth;
                    windowHeight = canvas.height = window.innerHeight;
                    particles = [];
                    context.clearRect(0,0, windowWidth, windowHeight);
                    init();
                }
        
        
                loop();
        }
        


        gsap.registerPlugin(ScrollTrigger); 


        gsap.from(".backPresentacion",{
            opacity:0,
            duration:3,
            scrollTrigger:{
                trigger: ".boxTournament",
                start: "top center",
                end: "bottom bottom",
               
            }
        })


        gsap.from(".tournamentTitle",{
            opacity:0,
            delay:.2,
            scale:1,
            duration:.5,
            scrollTrigger:{
                trigger: ".boxTournament",
                start: "top center",
                end: "bottom bottom",
            }
        })
    
        gsap.from(".subTitlePrize",{
            opacity:0,
            delay:.5,
            duration:2,
            scrollTrigger:{
                trigger: ".boxTournament",
                start: "top center",
                end: "bottom bottom",
            }
        })
    
    
        gsap.from(".logoContainer",{
            y: "+=100",
            opacity:0,
            duration:2.5,
            scrollTrigger:{
                trigger: ".subTitlePrize",
                start: "top -100",
                end: "bottom bottom",
                onEnter:presetEffectBall,
            }
        })

            
        gsap.from(".effectLogo",{
            y: "+=100",
            opacity:0,
            duration:2.5,
            scrollTrigger:{
                trigger: ".subTitlePrize",
                start: "top -100",
                end: "bottom bottom",
                onEnter:presetEffectBall,
            }
        })

            
        gsap.to(".boxButtonTicketBuy",{
            opacity:1,
            delay:.5,
            y: -30,
            duration:2,
            scrollTrigger:{
                trigger: ".boxTournament",
                start: "top center",
                end: "bottom bottom",
            }
        })

    }
   
}

export default tournamentScroll;