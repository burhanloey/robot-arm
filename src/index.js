import * as THREE from 'three';
import { Ground } from './scene/ground';
import { Arm } from './components/arms';
import { Base } from './components/base';
import { Joint } from './components/joints';
import { Support } from './components/support';
import { keyPressed } from './controls';

const aspectRatio = window.innerWidth / window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, aspectRatio, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.y = 1.2;
camera.position.z = 5;

const ground = new Ground().attachTo( scene );
const base = new Base().attachTo( ground );
const support = new Support().attachTo( base );
const shoulder = new Joint().attachTo( support );
const upperArm = new Arm().attachTo( shoulder );
const elbow = new Joint().attachTo( upperArm );
const lowerArm = new Arm().attachTo( elbow );

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
