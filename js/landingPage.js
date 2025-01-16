const carousel = document.getElementById("carousel");
        const cards = Array.from(carousel.children);
        const pauseBtn = document.getElementById("pauseBtn");
        const playBtn = document.getElementById("playBtn");

        let isPaused = false;
        let angle = 0;

        // Posicionar las tarjetas dinámicamente
        const positionCards = () => {
            const totalCards = cards.length;
            const angleStep = 360 / totalCards;
            const distance = 400; // Ajusta la distancia radial entre las tarjetas

            cards.forEach((card, index) => {
                const currentAngle = index * angleStep;
                card.style.transform = `rotateY(${currentAngle}deg) translateZ(${distance}px)`;
            });
        };

        const animateCarousel = () => {
            if (!isPaused) {
                angle += 0.3;
                carousel.style.transform = `rotateY(${angle}deg)`;
            }
            requestAnimationFrame(animateCarousel);
        };

        pauseBtn.addEventListener("click", () => {
            isPaused = true;
        });

        playBtn.addEventListener("click", () => {
            isPaused = false;
        });

        positionCards();
        animateCarousel();