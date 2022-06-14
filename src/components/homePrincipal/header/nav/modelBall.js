import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import ballModel from "./src/models/ball.glb"


const navBallModel = () => {

        const scene = new THREE.Scene()

        const canvas = document.querySelector(".navBallModel")


        /*------- config ------- */


            /* sizes */

        const sizes = {
            width: 190,
            height: 190
        }

        window.addEventListener("resize", () =>{
            sizes.width = 190
            sizes.height = 190

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

        /* 0xff00ff */

            /* lights */
       
            const ambientLight = new THREE.AmbientLight(0xffffff, .75)
            scene.add(ambientLight)

            const pointLight4 = new THREE.PointLight(0xffffff,2)
            pointLight4.position.set(0 , 0, 3)
            scene.add(pointLight4)

            const pointLight = new THREE.PointLight(0xffffff,5)
            pointLight.position.set(3 , 0, 3)
            scene.add(pointLight)

            const pointLight2 = new THREE.PointLight(0xffffff,5)
            pointLight2.position.set(-1 , 0, 6)
            scene.add(pointLight2)

            const pointLight3 = new THREE.PointLight(0xffffff,6)
            pointLight3.position.set(0 , 2, 0)
            scene.add(pointLight3)

            const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
            directionalLight.position.set(0, 0, -2)
            scene.add(directionalLight)
            
            const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 1.5)
            scene.add(hemisphereLight)


            /* camera */
            
        const camera =new THREE.PerspectiveCamera(55, sizes.width / sizes.height, .1, 100)
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

        
        const animate = ()=>{

            camera.rotation.y = 0.01

            if (modelBall){
                modelBall.rotation.y += 0.006
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