import * as THREE from 'three';
import cryptoCupImg from "./src/img/cryptoCupImg.jpg"
import * as dat from 'lil-gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

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



        // Cursor

 /*    const cursor = {
        x: 0,
        y: 0
    }

    window.addEventListener('mousemove', (event) =>{

        cursor.x = -(event.clientX / sizes.width - 0.5)
        cursor.y =  (event.clientY / sizes.height - 0.5)
    });
 */

    /* ------------------------------------------------- */

        /* textures */

    const textureLoader = new THREE.TextureLoader()
    const texturePantalla = textureLoader.load(cryptoCupImg)



    const scene =new THREE.Scene()
    scene.background = new THREE.Color( 0x000000);

    
        /* geometrys */
        
    const geometryPantalla =new THREE.BoxBufferGeometry(2.5, 1.6, 1)
    const materialPantalla=new THREE.MeshStandardMaterial({map: texturePantalla})
          materialPantalla.metalness = 1
          materialPantalla.roughness = 0.68
          materialPantalla.metalnessMap= texturePantalla
          materialPantalla.roughnessMap= texturePantalla

    const meshPantalla =new THREE.Mesh(geometryPantalla, materialPantalla)
          meshPantalla.position.set(1.4, 0, .3)
          meshPantalla.rotation.y = - Math.PI * 0.08


    scene.add(meshPantalla)
    
    
    const geometryPiso = new THREE.PlaneBufferGeometry(12,4)
    const materialPiso= new THREE.MeshStandardMaterial({color: 0xffffff })

    
    const piso = new THREE.Mesh(geometryPiso, materialPiso)
          
          piso.position.set(0, -0.8, 1)
          piso.rotation.x = -Math.PI/2

    scene.add(piso)



        /* gui */

    const gui = new dat.GUI()
    gui.add(materialPantalla, 'metalness').min(0).max(1).step(0.0001)
    gui.add(materialPantalla, 'roughness').min(0).max(1).step(0.0001)



        /* lights */



    const spotLight = new THREE.SpotLight(0xff00ff, 2.5, 8, Math.PI * 0.1, .25, )
    spotLight.position.x = -3
    spotLight.position.y = 0
    spotLight.position.z = 4
    spotLight.target.position.x =  1.5
    scene.add(spotLight.target)
    scene.add(spotLight)

     const pointLight = new THREE.PointLight(0xffffff, 1.8)
    pointLight.position.x = 1
    pointLight.position.y = -4
    pointLight.position.z = 5

    scene.add(pointLight)
 

    
    
  /*   const moviLuz2 = new THREE.PointLight("#00ffff", 3)
    moviLuz2.position.set(0 , 10 , 1)
    scene.add(moviLuz2)
    
    const moviLuz3 = new THREE.PointLight("#ffff00", 3)
    moviLuz3.position.set(0 ,10, 1)
    scene.add(moviLuz3)
     */
    
    




        /* camera */
        
    const camera =new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100)
        camera.position.z= 3

    scene.add(camera)


        // Controls

    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true

        
        /* animate  */

    
        const clock = new THREE.Clock()
    const animate = ()=>{

        const time = clock.getElapsedTime()
        const ghost1Angle = time 
        spotLight.position.x = -Math.sin(ghost1Angle ) *3

       /*  const ghost1Angle = time *1.1 */
        /* moviLuz1.position.x = Math.cos(ghost1Angle) *100 */
        /* moviLuz1.position.z = Math.sin(ghost1Angle) *100 */
      /*   moviLuz1.position.y = Math.sin(time *3) */
  
    /*   const ghost2Angle = -time * 1.2
        moviLuz2.position.x = Math.cos(ghost2Angle) *100
        moviLuz2.position.z = Math.sin(ghost2Angle) *100
        moviLuz2.position.y = Math.sin(time *4) + Math.sin(time *2.5)
  
      const ghost3Angle = -time * 1
        moviLuz3.position.x = Math.cos(ghost3Angle) *100
        moviLuz3.position.z = Math.sin(ghost3Angle) *100
        moviLuz3.position.y = Math.sin(time *3) */
  
    
        // Update camera
/* 
        camera.position.x= cursor.x * 3
        camera.position.y = cursor.y * 3
 */
        /* camera.lookAt(mesh.position) */


        controls.update()
        renderer.render(scene,camera)
        window.requestAnimationFrame(animate)
    }
    animate()



}



export default backgroundPresentacion