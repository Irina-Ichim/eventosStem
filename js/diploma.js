const participants = [
    { name: "Ana García", role: "Frontend Developer", model: "https://models.readyplayer.me/6782685f2e7fac7574526ff8.glb" },
    { name: "María López", role: "Data Scientist", model: "https://models.readyplayer.me/6782685f2e7fac7574526ff8.glb" },
    { name: "Laura Martín", role: "DevOps Engineer", model: "https://models.readyplayer.me/678269a63b064b4dff1ad793.glb" },
    { name: "Sofia Torres", role: "UX Designer", model: "https://models.readyplayer.me/678269a63b064b4dff1ad793.glb" },
    { name: "Carmen Ruiz", role: "AI Engineer", model: "https://models.readyplayer.me/6782685f2e7fac7574526ff8.glb" },
    { name: "Elena Pérez", role: "Backend Developer", model: "https://models.readyplayer.me/6782685f2e7fac7574526ff8.glb" },
    { name: "Lucía Fernández", role: "Machine Learning Specialist", model: "https://models.readyplayer.me/6782685f2e7fac7574526ff8.glb" },
    { name: "Clara Sánchez", role: "Mobile App Developer", model: "https://models.readyplayer.me/678269a63b064b4dff1ad793.glb" }
];

const gridContainer = document.getElementById('gridContainer');

participants.forEach(participant => {
    const card = document.createElement('div');
    card.className = 'participant-card';

    card.innerHTML = `
        <model-viewer src="${participant.model}" alt="${participant.name}" camera-controls auto-rotate></model-viewer>
        <div class="participant-name">${participant.name}</div>
        <div class="participant-role">${participant.role}</div>
    `;

    gridContainer.appendChild(card);
});