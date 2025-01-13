const carousel = document.getElementById('carousel');
const pauseBtn = document.getElementById('pauseBtn');
const playBtn = document.getElementById('playBtn');

const talents = [
    { name: "Ana García", role: "Frontend Developer", quote: "Creando interfaces hermosas.", model: "https://models.readyplayer.me/6782685f2e7fac7574526ff8.glb" },
    { name: "María López", role: "Data Scientist", quote: "Explorando el mundo con datos.", model: "https://models.readyplayer.me/6782685f2e7fac7574526ff8.glb" },
    { name: "Laura Martín", role: "DevOps Engineer", quote: "Automatización como base del futuro.", model: "https://models.readyplayer.me/678269a63b064b4dff1ad793.glb" },
    { name: "Ana García", role: "Frontend Developer", quote: "Creando interfaces hermosas.", model: "https://models.readyplayer.me/6782685f2e7fac7574526ff8.glb" },
    { name: "María López", role: "Data Scientist", quote: "Explorando el mundo con datos.", model: "https://models.readyplayer.me/6782685f2e7fac7574526ff8.glb" },
    { name: "Laura Martín", role: "DevOps Engineer", quote: "Automatización como base del futuro.", model: "https://models.readyplayer.me/678269a63b064b4dff1ad793.glb" },
    { name: "Ana García", role: "Frontend Developer", quote: "Creando interfaces hermosas.", model: "https://models.readyplayer.me/6782685f2e7fac7574526ff8.glb" },
    { name: "María López", role: "Data Scientist", quote: "Explorando el mundo con datos.", model: "https://models.readyplayer.me/6782685f2e7fac7574526ff8.glb" },
    { name: "Laura Martín", role: "DevOps Engineer", quote: "Automatización como base del futuro.", model: "https://models.readyplayer.me/678269a63b064b4dff1ad793.glb" },
    { name: "Ana García", role: "Frontend Developer", quote: "Creando interfaces hermosas.", model: "https://models.readyplayer.me/6782685f2e7fac7574526ff8.glb" },
    { name: "María López", role: "Data Scientist", quote: "Explorando el mundo con datos.", model: "https://models.readyplayer.me/6782685f2e7fac7574526ff8.glb" },
    { name: "Laura Martín", role: "DevOps Engineer", quote: "Automatización como base del futuro.", model: "https://models.readyplayer.me/678269a63b064b4dff1ad793.glb" },
    { name: "Ana García", role: "Frontend Developer", quote: "Creando interfaces hermosas.", model: "https://models.readyplayer.me/6782685f2e7fac7574526ff8.glb" },
    { name: "María López", role: "Data Scientist", quote: "Explorando el mundo con datos.", model: "https://models.readyplayer.me/6782685f2e7fac7574526ff8.glb" }
];

talents.forEach((talent, index) => {
    const card = document.createElement('div');
    card.className = 'talent-card';
    
    const angle = (index / talents.length) * 2 * Math.PI;
    const radius = 600;

    card.style.transform = `
        rotateY(${(index / talents.length) * 360}deg)
        translateZ(${radius}px)
    `;

    card.innerHTML = `
        <model-viewer src="${talent.model}" alt="${talent.name}" camera-controls auto-rotate></model-viewer>
        <div class="talent-info">
            <h2 class="talent-name">${talent.name}</h2>
            <p class="talent-role">${talent.role}</p>
            <p class="talent-quote">${talent.quote}</p>
        </div>
    `;

    carousel.appendChild(card);
});

pauseBtn.addEventListener('click', () => carousel.classList.add('paused'));
playBtn.addEventListener('click', () => carousel.classList.remove('paused'));