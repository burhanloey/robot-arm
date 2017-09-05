import * as THREE from 'three';

export const plane = new THREE.PlaneBufferGeometry( 15, 15, 16, 16 );
plane.rotateX( Math.PI / 2 );
