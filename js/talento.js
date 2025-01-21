const carousel = document.getElementById("carousel");
const cards = Array.from(carousel.children);
const pauseBtn = document.getElementById("pauseBtn");
const playBtn = document.getElementById("playBtn");

let isPaused = false;
let angle = 0;
let speed = 0.3; // Velocidad configurable
let currentGroupIndex = 0;

const groupSize = 17;
const totalGroups = Math.ceil(cards.length / groupSize);

const positionCards = (groupIndex) => {
  const totalCards = cards.length;
  const angleStep = 360 / groupSize;
  const distance = 660;

  // Ocultar todas las tarjetas
  cards.forEach((card) => {
    card.style.display = "none";
  });

  // Mostrar y posicionar las tarjetas del grupo actual
  for (let i = 0; i < groupSize; i++) {
    const cardIndex = (groupIndex * groupSize + i) % totalCards;
    const card = cards[cardIndex];
    card.style.display = "block";
    const currentAngle = i * angleStep;
    card.style.transform = `rotateY(${currentAngle}deg) translateZ(${distance}px)`;
  }
};

const animateCarousel = () => {
  if (!isPaused) {
    angle += speed; // Incrementa el ángulo según la velocidad
    carousel.style.transform = `rotateY(${angle}deg)`;

    // Cambiar de grupo al completar una vuelta
    if (angle % 360 < speed) {
      currentGroupIndex = (currentGroupIndex + 1) % totalGroups;
      positionCards(currentGroupIndex);
    }
  }
  requestAnimationFrame(animateCarousel);
};

// Pausar y reanudar la animación
pauseBtn.addEventListener("click", () => {
  isPaused = true;
});

playBtn.addEventListener("click", () => {
  isPaused = false;
});

// Inicializar la posición y comenzar la animación
positionCards(currentGroupIndex);
animateCarousel();

