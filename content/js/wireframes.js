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
const geometryPyramid = new THREE.ConeGeometry(4, 8, 4, 15);
const wireframePyramid = new THREE.WireframeGeometry(geometryPyramid);
const geometryCube = new THREE.BoxGeometry(1, 1, 1);
const wireframeCube = new THREE.WireframeGeometry(geometryCube);

const lineSphere = new THREE.LineSegments(wireframeSphere);
const linePyramid = new THREE.LineSegments(wireframePyramid);
const lineCube = new THREE.LineSegments(wireframeCube);


lineSphere.material.depthTest = true;
lineSphere.material.opacity = 1;
lineSphere.material.transparent = false;
lineSphere.material.color.set(0x00ff00);
lineSphere.position.y = 2;
scene.add(lineSphere);

linePyramid.material.depthTest = true;
linePyramid.material.opacity = 1;
linePyramid.material.transparent = false;
linePyramid.material.color.set(0x00ff00);
linePyramid.position.y = -8;
linePyramid.position.z = -16;
scene.add(linePyramid);

lineCube.material.depthTest = true;
lineCube.material.opacity = 1;
lineCube.material.transparent = false;
lineCube.material.color.set(0x00ff00);
lineCube.position.y = 0;
lineCube.position.z = 0;
scene.add(lineCube);

// const sphere = new THREE.Mesh(geometrySphere);
// sphere.material.depthTest = false;
// sphere.material.opacity = 0.75;
// sphere.material.transparent = true;
// sphere.material.color.set(0x00ff00);
// sphere.position.y = 2;
// scene.add(sphere);

camera.position.z = 5;

renderer.setClearColor(0x000000, 0);

function animate() {
    lineSphere.rotation.x += 0.01;
    lineSphere.rotation.y += 0.01;

    linePyramid.rotation.y += 0.01;

    lineCube.rotation.x += 0.01;
    lineCube.rotation.y += -0.01;

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