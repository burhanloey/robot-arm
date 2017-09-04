import * as THREE from 'three';

export const cuboid = new THREE.BoxGeometry( 0.25, 2, 0.25 );

export const flatCuboid = new THREE.BoxGeometry( 1, 0.1, 1 );

export const shortCuboid = new THREE.BoxGeometry( 0.25, 0.5, 0.25 );

export const cylinder = new THREE.CylinderGeometry( 0.3, 0.3, 0.4, 16 );
cylinder.rotateX( Math.PI / 2 );
