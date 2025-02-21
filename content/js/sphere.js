import * as THREE from 'three';

const scene = new THREE.Scene();
const wireframeDiv = document.getElementById('wireframe');
const width = wireframeDiv.clientWidth;
const height = wireframeDiv.clientHeight;
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
wireframeDiv.appendChild(renderer.domElement);

const geometrySphere = new THREE.SphereGeometry();
const wireframeSphere = new THREE.WireframeGeometry(geometrySphere);

const lineSphere = new THREE.LineSegments(wireframeSphere);

lineSphere.material.depthTest = true;
lineSphere.material.opacity = 1;
lineSphere.material.transparent = false;
lineSphere.material.color.set(0x00ff00);
scene.add(lineSphere);


// const sphere = new THREE.Mesh(geometrySphere);
// sphere.material.depthTest = false;
// sphere.material.opacity = 0.75;
// sphere.material.transparent = true;
// sphere.material.color.set(0x00ff00);
// sphere.position.y = 2;
// scene.add(sphere);

camera.position.z = 5;

renderer.setClearColor(0x000000, 0);

let shrinking = false;

function animate() {
    lineSphere.rotation.x += 0.01;
    lineSphere.rotation.y += 0.01;
    
    if (lineSphere.scale.x >= 12) {
        shrinking = true;
    } else if (lineSphere.scale.x <= -12) {
        shrinking = false;
    }

    if (shrinking) {
        lineSphere.scale.x -= 0.05;
        lineSphere.scale.y -= 0.05;
        lineSphere.scale.z -= 0.05;
    } else {
        lineSphere.scale.x += 0.05;
        lineSphere.scale.y += 0.05;
        lineSphere.scale.z += 0.05;
    }
    

    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

window.addEventListener('resize', () => {
    const width = wireframeDiv.clientWidth;
    const height = wireframeDiv.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});