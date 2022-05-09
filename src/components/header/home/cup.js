import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import cupModel from "./src/model/cupModel.gltf"

const cup = () => {

    const canvas = document.querySelector(".cupWebGl")


    /*------- config ------- */


        /* sizes */

    const sizes = {
        width: 600,
        height: 900
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
        antialias:true,
        alpha:true
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.physicallyCorrectLights = true



    /* ------------------------------------------------- */

    const scene = new THREE.Scene()

     

        /* lights */
        const ambientLight = new THREE.AmbientLight(0xffffff, 1)
        scene.add(ambientLight)


        /* camera */
        
    const camera =new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100)
        camera.position.z= 3

    scene.add(camera)



    const gltfLoader = new GLTFLoader()

    gltfLoader.load(cupModel,
        (gltf) =>
        {
            gltf.scene.scale.set(1, 1, 1)
            gltf.scene.position.set(0, -1.5, 0)
            gltf.scene.rotation.set(0, -1.55, 0)
            scene.add(gltf.scene)

        }
    )



        // Controls

    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.enableZoom = false 
    controls.enablePan= false
    controls.minDistance = 2
    controls.maxDistance = 10

    controls.minPolarAngle = 1.7;
    controls.maxPolarAngle = 1.7;


        
        /* animate  */

    /* 
    const clock = new THREE.Clock() */
    const animate = ()=>{
     /*    const time = clock.getElapsedTime()
        const ghost1Angle = time  */


        // Update camera
      /*  controls.update()  */
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