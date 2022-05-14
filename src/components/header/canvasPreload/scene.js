import * as THREE from 'three';
import cryptoCup from "./src/img/cryptoCup.png"
import gsap from 'gsap';



const backgroundPresentacion = () => {

    const canvas = document.querySelector(".webGl")


    /*------- config ------- */


        /* sizes */

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    window.addEventListener("resize", () =>{
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })


        /* render */

    const renderer =new THREE.WebGLRenderer({
        canvas: canvas, 
        antialias:true
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.physicallyCorrectLights = true



    /* ------------------------------------------------- */

        /* textures */

    const textureLoader = new THREE.TextureLoader()
    const texturePantalla = textureLoader.load(cryptoCup)



    const scene =new THREE.Scene()
    scene.background = new THREE.Color( 0x000000);

    
        /* geometrys */
        
    const geometryPantalla =new THREE.BoxBufferGeometry(2.8, 1.8, 1.4, 1)
        const materialPantalla=new THREE.MeshStandardMaterial({/* wireframe:true, */map: texturePantalla})
          materialPantalla.metalness = .9
          materialPantalla.roughness = 0.7
          materialPantalla.metalnessMap= texturePantalla
          materialPantalla.roughnessMap= texturePantalla

    const meshPantalla =new THREE.Mesh(geometryPantalla, materialPantalla)
          meshPantalla.position.set(1.5, 0, -.2)
          meshPantalla.quaternion.y = -Math.PI * 0.030


    scene.add(meshPantalla)
    
    
    const geometryPiso = new THREE.PlaneBufferGeometry(12,40, 1)
    const materialPiso= new THREE.MeshStandardMaterial({color: 0xffffff })

    
    const piso = new THREE.Mesh(geometryPiso, materialPiso)
          
          piso.position.set(0, -0.8, 1)
          piso.rotation.x = -Math.PI/2

    scene.add(piso)


        /* lights */


    const spotLight = new THREE.SpotLight(0xff00ff, 15, 8, Math.PI * .1, .25, )
    spotLight.position.x = 0
    spotLight.position.y = 0
    spotLight.position.z = 4
    spotLight.target.position.x =  1.4
    scene.add(spotLight.target)
    scene.add(spotLight)


    const spotLight1 = new THREE.SpotLight(0xff00af, 6, 8, Math.PI * .15, .20)
    spotLight1.position.x = 0
    spotLight1.position.y = 3.5
    spotLight1.position.z = 3.5
    spotLight1.target.position.x =  1.5
    scene.add(spotLight1.target)
    scene.add(spotLight1)



     const pointLight = new THREE.PointLight(0xffffff, 20)
    pointLight.position.x = 1
    pointLight.position.y = -4
    pointLight.position.z = 5

    scene.add(pointLight)

        /* camera */
        
    const camera =new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000)
        camera.position.z= 3
        camera.lookAt(new THREE.Vector3())

    scene.add(camera)


        // Controls
/* 
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true */

        
        /* animate  */

    
    const clock = new THREE.Clock()
    const animate = ()=>{

        const time = clock.getElapsedTime()
        const ghost1Angle = time 
        spotLight.position.x = -Math.sin(ghost1Angle ) *3
        spotLight1.position.x = Math.cos(ghost1Angle ) *2
        // Update camera
     /*    controls.update() */
        renderer.render(scene,camera)
        window.requestAnimationFrame(animate)

    }
    animate()

    const clickButton = () => {
        let button = document.querySelector(".buttonEx")
        let text = document.querySelector(".textPresent")
        let home = document.querySelector(".containerHome")
  

        button.addEventListener("click", ()=>{
            
            text.style.opacity= 0;

                gsap.to(camera.rotation, { duration: 2, delay:1 ,y: .1  })

                gsap.to(camera.position, { duration: 5, delay:1.7, z:1,x:-3 })

                gsap.to(camera.rotation, { duration: 2, delay:1 ,y: .5  })

                gsap.to(canvas,{
                    opacity:0,
                    delay:4.3,
                    duration:5
                })

                gsap.to(canvas,{
                    display:"none",
                    delay:3,
                })

                gsap.to(".containerHome",{
                    display:"inline-block",
                    zIndex:100,
                    delay:3,
                })

                gsap.to(home,{
                    opacity:1,
                    delay:3.4,
                    duration:2
                })

                
                gsap.to(".nav",{
                    opacity:1,
                    delay:3.8,
                    duration:1
                })
            
        })

    }

    clickButton()








    /* OPTIMIZACION */
    
geometryPantalla.verticesNeedUpdate = true; 
geometryPantalla.elementsNeedUpdate = true; 
geometryPantalla.morphTargetsNeedUpdate = true; 
geometryPantalla.uvsNeedUpdate = true;
geometryPantalla.normalsNeedUpdate = true; 
geometryPantalla.colorsNeedUpdate = true; 

materialPantalla.needsUpdate = true

texturePantalla.needsUpdate = true;

    renderer.render(scene,camera)
}



export default backgroundPresentacion