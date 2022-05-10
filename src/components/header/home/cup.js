import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import cupModel from "./src/model/cupModel.gltf"


const cup = () => {
    const scene = new THREE.Scene()

    const canvas = document.querySelector(".cupWebGl")


    /*------- config ------- */


        /* sizes */

    const sizes = {
        width: 700,
        height: 1000
    }

    window.addEventListener("resize", () =>{
        sizes.width = 700
        sizes.height = 1000

        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })


        /* render */

    const renderer =new THREE.WebGLRenderer({
        canvas: canvas, 
        antialias:true,
        alpha:true
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.physicallyCorrectLights = true




    /* ------------------------------------------------- */

    
     

        /* lights */
        const direccionalLight = new THREE.DirectionalLight(0xFDD275, 2)
        direccionalLight.position.set(8, 5, 200)
        scene.add(direccionalLight)
     
        const pointLight = new THREE.PointLight(0xFBAD5F,35)
        pointLight.position.set(4 , 0, 2)
        scene.add(pointLight)

        const pointLight2 = new THREE.PointLight(0xFBAD5F, 35)
        pointLight2.position.set(-2 , 0, 1)
        scene.add(pointLight2)

        const pointLight3 = new THREE.PointLight(0xFBAD5F, 20)
        pointLight3.position.set(-2 , -2 , 0)
        scene.add(pointLight3)

        const pointLight4 = new THREE.PointLight(0xFBAD5F, 50)
        pointLight4.position.set(-3 , 5, -2)
        scene.add(pointLight4)

        const pointLight5 = new THREE.PointLight(0xFBAD5F, 50)
        pointLight5.position.set(3 , 5, -2)
        scene.add(pointLight5)


        const spotLight = new THREE.SpotLight(0xFBAD5F, 100, 1.4, Math.PI * 1.14, .25, 1)
        spotLight.position.set(0, 5, 2)
        scene.add(spotLight)

        

        /* camera */
        
    const camera =new THREE.PerspectiveCamera(57, sizes.width / sizes.height, .1, 100)
        camera.position.z= 4.6

    scene.add(camera)




    let modelCup

    const gltfLoader = new GLTFLoader()
    gltfLoader.load(cupModel,
        (gltf) =>
        {
            modelCup= gltf.scene
            modelCup.scale.set(1.2, 1.2, 1.2)
            modelCup.position.set(0, -1.7, 0)
            modelCup.rotation.set(0, -1.55, 0)
            scene.add(modelCup)
        }
    )



        // Controls

    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    /* controls.enableZoom = false  */
    controls.enablePan= false
    controls.minDistance = 2
    controls.maxDistance = 10

/*     controls.minPolarAngle = 1.7;
    controls.maxPolarAngle = 1.7; */


        
        /* animate  */

    
    const clock = new THREE.Clock()
    const animate = ()=>{
        const time = clock.getElapsedTime()
        const ghost1Angle = time 

        camera.rotation.y -= 0.01

        if (modelCup){
            modelCup.rotation.y += 0.004
        } 

        // Update camera

        controls.update() 
        renderer.render(scene,camera)
        window.requestAnimationFrame(animate)

    }
    animate()




    /* OPTIMIZACION */
    
    gltfLoader.verticesNeedUpdate = true; 
    gltfLoader.elementsNeedUpdate = true; 
    gltfLoader.morphTargetsNeedUpdate = true; 
    gltfLoader.uvsNeedUpdate = true;
    gltfLoader.normalsNeedUpdate = true; 
    gltfLoader.colorsNeedUpdate = true; 

    gltfLoader.needsUpdate = true



}

export default cup;