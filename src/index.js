import * as THREE from 'three';
import { keyPressed } from './controls';

const aspectRatio = window.innerWidth / window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, aspectRatio, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const cuboid = new THREE.BoxGeometry( 0.25, 2, 0.25 );
const shortCuboid = new THREE.BoxGeometry( 0.25, 0.5, 0.25 );
const flatCuboid = new THREE.BoxGeometry( 1, 0.1, 1 );
const green = new THREE.MeshBasicMaterial( { color: 0x00ff00,
                                             wireframe: true } );
const cylinder = new THREE.CylinderGeometry( 0.3, 0.3, 0.4, 16 );
cylinder.rotateX( Math.PI / 2 );
const blue = new THREE.MeshBasicMaterial( { color: 0x0000ff,
                                            wireframe: true} );

const base = new THREE.Mesh( flatCuboid, green );
const stand = new THREE.Mesh( shortCuboid, green );
const upperArm = new THREE.Mesh( cuboid, green );
const lowerArm = new THREE.Mesh( cuboid, green );

const shoulder = new THREE.Mesh( cylinder, blue );
const elbow = new THREE.Mesh( cylinder, blue );

base.add( stand );
stand.add( shoulder );
shoulder.add( upperArm );
upperArm.add( elbow );
elbow.add( lowerArm );

scene.add( base );

camera.position.y = 1.2;
camera.position.z = 5;

stand.position.y = stand.geometry.parameters.height / 2;
shoulder.position.y = stand.geometry.parameters.height / 2;
upperArm.position.y = upperArm.geometry.parameters.height / 2;
elbow.position.y = upperArm.geometry.parameters.height / 2;
lowerArm.position.y = lowerArm.geometry.parameters.height / 2;

const delta = 0.05;

const animate = () => {
    requestAnimationFrame( animate );

    if ( keyPressed.up ) { elbow.rotation.z -= delta; }
    if ( keyPressed.down ) { elbow.rotation.z += delta; }
    if ( keyPressed.w ) { shoulder.rotation.z -= delta; }
    if ( keyPressed.s ) { shoulder.rotation.z += delta; }
    if ( keyPressed.d ) { base.rotation.y -= delta; }
    if ( keyPressed.a ) { base.rotation.y += delta; }

    renderer.render(scene, camera);
};

animate();
