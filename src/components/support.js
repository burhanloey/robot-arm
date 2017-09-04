import * as THREE from 'three';
import { shortCuboid } from './geometries';
import { green } from './materials';

export class Support {
    constructor() {
        this.support = new THREE.Mesh( shortCuboid, green );
    }

    attachTo(parent) {
        parent.add( this.support );
        this.support.position.y = this.support.geometry.parameters.height / 2;
        return this.support;
    }
}
