import * as THREE from 'three';

const aspectRatio = window.innerWidth / window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, aspectRatio, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const cuboid = new THREE.BoxGeometry( 2, 0.25, 0.25 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00,
                                                wireframe: true } );

const upperArm = new THREE.Mesh( cuboid, material );
const middleArm = new THREE.Mesh( cuboid, material );
const lowerArm = new THREE.Mesh( cuboid, material );

const base = new THREE.Object3D();
const shoulder = new THREE.Object3D();
const elbow = new THREE.Object3D();

base.add( upperArm );
upperArm.add( shoulder );
shoulder.add( middleArm );
middleArm.add( elbow );
elbow.add( lowerArm );

scene.add( base );

camera.position.y = 2.2;
camera.position.z = 5;

upperArm.position.x = 1;
shoulder.position.x = 1;
middleArm.position.x = 1;
elbow.position.x = 1;
lowerArm.position.x = 1;

base.rotation.z = Math.PI / 4;

let delta = 0.05;

const animate = () => {
    requestAnimationFrame( animate );

    if ( base.rotation.z < Math.PI / 4 ||
         base.rotation.z > Math.PI * 2 / 3 )
    {
        delta = -delta;
    }
    base.rotation.z += delta;
    shoulder.rotation.z += delta;
    elbow.rotation.z += delta;

    renderer.render(scene, camera);
};

animate();
