import * as THREE from 'three';
import { Ground } from './scene/ground';
import { Arm } from './components/arms';
import { Base } from './components/base';
import { Joint } from './components/joints';
import { Support } from './components/support';
import { Eye } from './components/eye';
import { keyPressed } from './controls';

const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;
const aspectRatio = SCREEN_WIDTH / SCREEN_HEIGHT;

const scene = new THREE.Scene();

const ground = new Ground().attachTo( scene );
const base = new Base().attachTo( ground );
const support = new Support().attachTo( base );
const shoulder = new Joint().attachTo( support );
const upperArm = new Arm().attachTo( shoulder );
const elbow = new Joint().attachTo( upperArm );
const lowerArm = new Arm().attachTo( elbow );
const eye = new Eye( aspectRatio ).attachTo( lowerArm );

const camera = new THREE.PerspectiveCamera( 75, aspectRatio, 0.1, 1000 );
const camera2 = new THREE.PerspectiveCamera( 75, aspectRatio, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
renderer.autoClear = false;

document.body.appendChild( renderer.domElement );

camera.position.y = 1.2;
camera.position.z = 5;
camera2.position.x = -1.5;
camera2.position.y = 3;
camera2.position.z = 5;

const delta = 0.05;

const render = () => {
    renderer.clear();

    renderer.setViewport( 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT );
    renderer.render( scene, camera );

    renderer.setViewport( 0, 0, SCREEN_WIDTH / 4, SCREEN_HEIGHT / 4 );
    renderer.render( scene, camera2 );

    renderer.setViewport( SCREEN_WIDTH - SCREEN_WIDTH / 4, 0,
                          SCREEN_WIDTH / 4, SCREEN_HEIGHT / 4 );
    renderer.render( scene, eye );
};

const animate = () => {
    requestAnimationFrame( animate );

    if ( keyPressed.up ) { elbow.rotation.z -= delta; }
    if ( keyPressed.down ) { elbow.rotation.z += delta; }
    if ( keyPressed.w ) { shoulder.rotation.z -= delta; }
    if ( keyPressed.s ) { shoulder.rotation.z += delta; }
    if ( keyPressed.d ) { base.rotation.y -= delta; }
    if ( keyPressed.a ) { base.rotation.y += delta; }

    camera2.lookAt( lowerArm.getWorldPosition() );

    render();
};

animate();
