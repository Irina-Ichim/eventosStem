const carousel = document.getElementById("carousel");
const cards = Array.from(carousel.children);
const pauseBtn = document.getElementById("pauseBtn");
const playBtn = document.getElementById("playBtn");

let isPaused = false;
let angle = 0;
let currentGroupIndex = 0;

const groupSize = 19;
const totalGroups = Math.ceil(cards.length / groupSize);

const positionCards = (groupIndex) => {
  const totalCards = cards.length;
  const angleStep = 360 / groupSize;
  const distance = 650;

  cards.forEach((card) => {
    card.style.display = "none";
  });

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
    angle += 0.3;
    carousel.style.transform = `rotateY(${angle}deg)`;

    if (angle % 360 < 0.3) {
      currentGroupIndex = (currentGroupIndex + 1) % totalGroups;
      positionCards(currentGroupIndex);

      if (currentGroupIndex === 0) {
        angle = 0;
      }
    }
  }
  requestAnimationFrame(animateCarousel);
};

pauseBtn.addEventListener("click", () => {
  isPaused = true;
});

playBtn.addEventListener("click", () => {
  isPaused = false;
});

positionCards(currentGroupIndex);
animateCarousel();
