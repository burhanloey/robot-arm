import * as THREE from 'three';
import { cylinder } from './geometries';
import { blue } from './materials';

export class Joint {
    constructor() {
        this.joint = new THREE.Mesh( cylinder, blue );
    }

    attachTo(parent) {
        parent.add( this.joint );
        this.joint.position.y = parent.geometry.parameters.height / 2;
        return this.joint;
    }
}
