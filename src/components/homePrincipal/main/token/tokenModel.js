import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
/* import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; */
import tokenModelo from "./src/models/TokenModel.glb"


const tokenModel = () => {

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    if (!isMobile()) {
        const scene = new THREE.Scene()

        const canvas = document.querySelector(".tokenWebGl")


        /*------- config ------- */


            /* sizes */

        const sizes = {
            width: 600,
            height: 600
        }

        window.addEventListener("resize", () =>{
            sizes.width = 600
            sizes.height = 600

            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })


            /* render */

        const renderer =new THREE.WebGLRenderer({
            canvas: canvas, 
            /* antialias:true, */
           /*  alpha:true */
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.physicallyCorrectLights = true



        /* ------------------------------------------------- */
   

            /* camera */
            
        const camera =new THREE.PerspectiveCamera(55, sizes.width / sizes.height, .1, 100)
        camera.position.z= 4.6
        scene.add(camera)



        let tokenModelDorada

        const gltfLoader = new GLTFLoader()
        gltfLoader.load(tokenModelo,
            (gltf) =>
            {
                tokenModelDorada= gltf.scene
                tokenModelDorada.scale.set(.9, 1.0, 1.0)
                scene.add(tokenModelDorada)
            }
        )



            // Controls

/*         const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true
        controls.enableZoom = false 
        controls.enablePan= false */



            
            /* animate  */

        let time = Date.now()

        const animate = ()=>{

            const currentTime = Date.now()
            const deltaTime = currentTime - time
            time = currentTime


            if (tokenModelDorada){
                tokenModelDorada.rotation.y += 0.0005 * deltaTime
            } 


            // Update camera

         /*    controls.update()  */
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

export default tokenModel;