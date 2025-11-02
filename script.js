// script.js

// === 1. Setup the Scene, Camera, and Renderer ===
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
// Append the renderer's DOM element (the <canvas>) to the body
document.body.appendChild(renderer.domElement);

// Position the camera
camera.position.z = 5;

// Colors
const Colors = [
    White = new THREE.MeshBasicMaterial({ color: '#FFFFFF' }),
    Gray = new THREE.MeshBasicMaterial({ color: '#737272' }),
    Black = new THREE.MeshBasicMaterial({ color: '#000000' }),
    Cyan = new THREE.MeshBasicMaterial({ color: '#00FFD7' }),
    DarkBlue = new THREE.MeshBasicMaterial({ color: '#051F85' })
];

// === 2. Create Object ===
const geometry = new THREE.BoxGeometry(1, 1, 1);
const Cube = new THREE.Mesh(geometry, DarkBlue);
scene.add(Cube);

// === 4. The Animation Loop ===
function animate() {
    // This creates a loop that causes the renderer to draw the scene every time the screen is refreshed
    requestAnimationFrame(animate);

    Cube.rotation.x += 0.01;
    Cube.rotation.y += 0.01;
    Cube.rotation.z += 0.01;

    // Render the scene
    renderer.render(scene, camera);
}

// === 5. Handle Window Resize ===
// Ensures the scene looks correct if the browser window is resized
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the animation loop
animate();
