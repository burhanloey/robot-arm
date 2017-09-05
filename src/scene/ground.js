import * as THREE from 'three';
import { plane } from './geometries';
import { brown } from './materials';

export class Ground {
    constructor() {
        this.ground = new THREE.Mesh( plane, brown );
    }

    attachTo( parent ) {
        parent.add( this.ground );
        return this.ground;
    }
}
