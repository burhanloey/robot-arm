import * as THREE from 'three';

export class Eye {
    constructor(aspectRatio) {
        this.camera = new THREE.PerspectiveCamera( 75, aspectRatio, 0.1, 1000 );
        this.camera.rotation.x = Math.PI / 2;
        this.camera.rotation.z = Math.PI / 2;
    }

    attachTo(parent) {
        parent.add( this.camera );
        return this.camera;
    }
}
