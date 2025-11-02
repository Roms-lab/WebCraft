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

// === 2. Create Object and Add Texture ===

// 2a. Instantiate the TextureLoader
const loader = new THREE.TextureLoader();

// 2b. Load the texture image
// NOTE: Replace 'path/to/your/texture.jpg' with the actual path to your image file.
const texture = loader.load('Texures/Grass Block.png', 
    // Callback for when the texture is successfully loaded
    function (tex) {
        console.log('Texture loaded successfully');
    },
    // Callback for progress (optional)
    undefined,
    // Callback for error
    function (err) {
        console.error('An error happened loading the texture:', err);
    }
);

// 2c. Create the material using the loaded texture
// We use a MeshBasicMaterial here, which works without lights.
// The map property applies the texture to the material's color.
const material = new THREE.MeshBasicMaterial({ map: texture });

// 2d. Create the geometry and mesh as before
const geometry = new THREE.BoxGeometry(1, 1, 1);
const Cube = new THREE.Mesh(geometry, material);
scene.add(Cube);

// === 4. The Animation Loop ===
function animate() {
    requestAnimationFrame(animate);

    Cube.rotation.x += 0.01;
    Cube.rotation.y += 0.01;
    Cube.rotation.z += 0.01;

    // Render the scene
    renderer.render(scene, camera);
}

// === 5. Handle Window Resize ===
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth / window.innerHeight);
});

// Start the animation loop
animate();
