import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import ballModel from "./src/models/PelotaGod.glb"


const navBallModel = () => {

        const scene = new THREE.Scene()
        const canvas = document.querySelector(".navBallModel")


        /*------- config ------- */


            /* sizes */

        const sizes = {
            width: 200,
            height: 200
        }

        window.addEventListener("resize", () =>{
            sizes.width = 200
            sizes.height = 200

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


            /* camera */
            
        const camera =new THREE.PerspectiveCamera(55, sizes.width / sizes.height, .1, 10)
            camera.position.z= 4.6
        scene.add(camera)

        let modelBall

        const gltfLoader = new GLTFLoader()
        gltfLoader.load(ballModel,
            (gltf) =>
            {
                modelBall= gltf.scene
                modelBall.scale.set(1.0, 1.0, 1.0)
                scene.add(modelBall)
            }
        )

            // Controls

        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true
        controls.enableZoom = false 
        controls.enablePan= false
        controls.minPolarAngle = 1.7;
        controls.maxPolarAngle = 1.7;


            
            /* animate  */

        let time = Date.now()

        const animate = ()=>{

            const currentTime = Date.now()
            const deltaTime = currentTime - time
            time = currentTime

            if (modelBall){
                modelBall.rotation.y += 0.0005 * deltaTime
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


export default navBallModel;