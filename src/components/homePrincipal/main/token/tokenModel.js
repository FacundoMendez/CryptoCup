import * as THREE from 'three';
import imagenToken from "./src/token3.png"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


const tokenModel = () =>{
    const scene = new THREE.Scene()

    const canvas = document.querySelector(".tokenWebGl")


    /*------- config ------- */


        /* sizes */

    const sizes = {
        width: 300,
        height: 300
    }

    window.addEventListener("resize", () =>{
        sizes.width = 300
        sizes.height = 300

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


    /* ----------------------------------------------------------- */

        const camera =new THREE.PerspectiveCamera(65, sizes.width / sizes.height, .1, 10)
        camera.position.set(0,0,7)

        scene.add(camera)

        /* top */
        const direccionalLight = new THREE.DirectionalLight(0xffffff, .1)
        direccionalLight.position.set(0, 10, 0)
        scene.add(direccionalLight)

        const direccionalLight2 = new THREE.DirectionalLight(0xffffff, .1)
        direccionalLight2.position.set(0, -10, 3)
        scene.add(direccionalLight2)


        const direccionalLight3 = new THREE.DirectionalLight(0xffffff, .1)
        direccionalLight3.position.set(-1,0,3)
        scene.add(direccionalLight3)
        

        const direccionalLight4 = new THREE.DirectionalLight(0xffffff, .1)
        direccionalLight4.position.set(1,0,3)
        scene.add(direccionalLight4)

        const direccionalLight5 = new THREE.DirectionalLight(0xffffff, .1)
        direccionalLight5.position.set(0,1,3)
        scene.add(direccionalLight5)

        /* bottom */

        const direccionalLight6 = new THREE.DirectionalLight(0xffffff, .1)
        direccionalLight6.position.set(-3,-6,3)
        scene.add(direccionalLight6)
        

        const direccionalLight7 = new THREE.DirectionalLight(0xffffff, .1)
        direccionalLight7.position.set(3,-6,3)
        scene.add(direccionalLight7)


      scene.add(new THREE.AmbientLight(0xFFDAAA,1))



      const texture = new THREE.TextureLoader().load( imagenToken );
      const material = new THREE.MeshStandardMaterial({
        map: texture,
        metalness:0.7,
        roughness:0.3,
      })
    
      var geometry = new THREE.CylinderBufferGeometry(3,3,0.4,100);
      const mesh = new THREE.Mesh(geometry,material)
      mesh.rotation.x = 1.6
      mesh.rotation.y = 1.58
      scene.add(mesh)


      const controls = new OrbitControls(camera, canvas)
      controls.enableDamping = true
      controls.enableZoom = false 
      controls.enablePan= false


    
    const animate = ()=>{

        // Update camera

        controls.update() 

        mesh.rotation.y = 0.015
        mesh.rotation.z -= 0.015

        renderer.render(scene,camera)
        window.requestAnimationFrame(animate)
    }

    animate()
    

        /* OPTIMIZACION */
    
    mesh.verticesNeedUpdate = true; 
    mesh.elementsNeedUpdate = true; 
    mesh.morphTargetsNeedUpdate = true; 
    mesh.uvsNeedUpdate = true;
    mesh.normalsNeedUpdate = true; 
    mesh.colorsNeedUpdate = true; 
    material.needsUpdate = true

}

export default tokenModel