import * as THREE from '../node_modules/three/build/three.min.js'
import {OrbitControls} from '../node_modules/three/examples/jsm/controls/OrbitControls.js'
import {GLTFLoader} from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import {MTLLoader} from '../node_modules/three/examples/jsm/loaders/MTLLoader.js'
const path = require('path');



function init(){
    let renderer, camera, scene, loader, mesh3Dmodel
    
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100000 ); 
    camera.rotation.y = 0;
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 50;
    console.log(camera.position)
    
    let light = new THREE.PointLight(0xffffff);
    light.position.set(40,0,60);
    scene.add(light);
    
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    let gltfloader = new GLTFLoader();
    gltfloader.load(__dirname + 'examples/' + '2b.glb', function(gltf){
        mesh3Dmodel = gltf.scene;
        delete mesh3Dmodel[0];
        console.log(mesh3Dmodel)
        mesh3Dmodel.position.y -= 25
        scene.add(mesh3Dmodel)
    },
    
    function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	}
                    
    );
    
    let geometry = new THREE.PlaneGeometry( 100, 100, 10 );
    let material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    let plane = new THREE.Mesh( geometry, material );
    plane.rotation.x -= Math.PI/2
    plane.position.y -= 25; 
    scene.add( plane );
    
    let controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.campingFactor = 0.25
    controls.enableZoom = true
    
    
    
    
    function animate(){
        console.log('hello')
        requestAnimationFrame( animate );
        
        controls.update();
        
        renderer.render( scene, camera );
    }
    animate();
}
init();


// let mtlLoader = new MTLLoader();
////    mtlLoader.setTexturePath('/examples/3d-obj-loader/assets/');
////    mtlLoader.setPath('/examples/3d-obj-loader/assets/');
//    mtlLoader.load(__dirname + 'examples/' + '2b.mtl', function (materials) {
//
//        materials.preload();
//
//        let objLoader = new OBJLoader();
//        objLoader.setMaterials(materials);
////        objLoader.setPath('/examples/3d-obj-loader/assets/');
//        objLoader.load(__dirname + 'examples/' + '2b.obj', function (object) {
//
//            scene.add(object);
//            object.position.y -= 20;
//
//        },function ( xhr ) {
//
//		      console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
//
//        });
//
//    });




