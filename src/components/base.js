import * as THREE from 'three';
import { flatCuboid } from './geometries';
import { green } from './materials';

export class Base {
    constructor() {
        this.base = new THREE.Mesh( flatCuboid, green );
    }

    attachTo(parent) {
        parent.add( this.base );
        return this.base;
    }
}
