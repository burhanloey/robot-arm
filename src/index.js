import * as THREE from 'three';

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

stand.position.y = 0.25;
shoulder.position.y = 0.25;
upperArm.position.y = 1;
elbow.position.y = 1;
lowerArm.position.y = 1;

const delta = 0.05;

function handleArms(event) {
    event.preventDefault();
    const keycode = event.which;

    switch ( keycode ) {
    case 38: shoulder.rotation.z += delta; break;  // up
    case 40: shoulder.rotation.z -= delta; break;  // down
    case 37: elbow.rotation.z += delta; break;     // left
    case 39: elbow.rotation.z -= delta; break;     // right
    case 65: base.rotation.y += delta; break;      // A
    case 68: base.rotation.y -= delta; break;      // D
    }

    renderer.render();
}
document.addEventListener("keydown", handleArms, false);

const animate = () => {
    requestAnimationFrame( animate );

    // if ( base.rotation.z < Math.PI / 4 ||
    //      base.rotation.z > Math.PI * 2 / 3 )
    // {
    //     delta = -delta;
    // }
    // base.rotation.z += delta;
    // shoulder.rotation.z += delta;
    // elbow.rotation.z += delta;

    renderer.render(scene, camera);
};

animate();
