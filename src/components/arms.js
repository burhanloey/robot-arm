import * as THREE from 'three';
import { cuboid } from './geometries';
import { green } from './materials';

export class Arm {
    constructor() {
        this.arm = new THREE.Mesh( cuboid, green );
    }

    attachTo(parent) {
        parent.add( this.arm );
        this.arm.position.y = this.arm.geometry.parameters.height / 2;
        return this.arm;
    }
}
