import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import ballModel from "./src/models/ball.glb"


const navBallModel = () => {

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    if (!isMobile()) {

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




        /* ------------------------------------------------- */

        

            /* lights */
       
            const ambientLight = new THREE.AmbientLight(0xff00ff, .7)
            scene.add(ambientLight)

            const pointLight4 = new THREE.PointLight(0xffffff,1.8)
            pointLight4.position.set(0 , 0, 2)
            scene.add(pointLight4)

        
            const pointLight = new THREE.PointLight(0xffffff,12)
            pointLight.position.set(4 , 0, 2)
            scene.add(pointLight)

            const pointLight2 = new THREE.PointLight(0xFFDAAA, 10)
            pointLight2.position.set(-2 , 0, 1)
            scene.add(pointLight2)

            const pointLight3 = new THREE.PointLight(0xFFDAAA, 10)
            pointLight3.position.set(0 , 2, 0)
            scene.add(pointLight3)

          

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
                modelBall.scale.set(1.05, 1.05, 1.05)
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

        
        const clock = new THREE.Clock()
        const animate = ()=>{
            const time = clock.getElapsedTime()
            const ghost1Angle = time 

            camera.rotation.y = 0.01

            if (modelBall){
                modelBall.rotation.y += 0.006
                modelBall.position.y = Math.cos(ghost1Angle * .5) / 20
                pointLight2.rotation.y -=  -0.1
                pointLight.rotation.y -=  0.1
                pointLight3.rotation.y -=  0.1
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

}

export default navBallModel;