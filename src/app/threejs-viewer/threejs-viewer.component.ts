import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-threejs-viewer',
  templateUrl: './threejs-viewer.component.html',
  styleUrls: ['./threejs-viewer.component.css']
})
export class ThreejsViewerComponent implements AfterViewInit {
  @ViewChild('container') containerRef: ElementRef | undefined;

  constructor() { }

  ngAfterViewInit(): void {
    if (this.containerRef) {
      const width = this.containerRef.nativeElement.clientWidth;
      const height = this.containerRef.nativeElement.clientHeight;

      // Set up scene, camera, and renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);
      this.containerRef.nativeElement.appendChild(renderer.domElement);

      // Add a cube to the scene
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      }
      animate();
    } else {
      console.error('Container reference is not defined');
    }
  }
}
