import * as THREE from 'three';

export const cuboid = new THREE.BoxBufferGeometry( 0.25, 2, 0.25 );

export const flatCuboid = new THREE.BoxBufferGeometry( 1, 0.1, 1 );

export const shortCuboid = new THREE.BoxBufferGeometry( 0.25, 0.5, 0.25 );

export const cylinder = new THREE.CylinderBufferGeometry( 0.3, 0.3, 0.4, 16 );
cylinder.rotateX( Math.PI / 2 );
