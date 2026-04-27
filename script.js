let paso = 0;

function nextStep() {
        const card = document.querySelector(".card");
        if (!card) return;
        if (paso === 0) {
         card.innerHTML = `
         <h2>🎂Happy Birthday!🎈🎁</h2>
         <p>espero tengas un dia lleno de alegria y sorpresas</p>
          <button onclick="nextStep()">Siguiente</button>
          `;
        paso++;
    } else if (paso === 1) {
        card.innerHTML = `
        <h2>algunos recuerdos</h2>
        <img src="img/img.jpg" class="foto esquina1" alt="Recuerdo 1">
        <img src="img/img2.jpg" class="foto esquina2" alt="Recuerdo 2">
        <img src="img/img3.jpg" class="foto esquina3" alt="Recuerdo 3">
        <img src="img/img4.jpg" class="foto esquina4" alt="Recuerdo 4">
            <p>📷✨</p>
            <button onclick="nextStep()">Siguiente</button>
        `;
        paso++;
    } else if (paso === 2) {
        card.innerHTML = `
        <h2>a happy birthday song!🎵</h2>
        <audio controls>
          <source src="happysong.mp3" type="audio/mpeg">
          </audio>
          <p>una linda cancion de cumpleaños</p>
          <button onclick="nextStep()">Siguiente</button>
        `;
        paso++;
    } else if (paso === 3) {
        card.innerHTML = `
        <h2>open the surprise🎁</h2>
        <button onclick="abrirRegalo()">Abrir regalo</button>
        <button onclick="noGift()">No quiero regalo</button>
        `;
        paso++;
    } else {
        card.innerHTML = `
        <h2>¡Feliz cumpleaños otra vez!</h2>
        <p>Espero que hayas disfrutado esta sorpresa</p>
        `;
    } 
}
function abrirRegalo() {
    const card = document.querySelector(".card");
    if (!card) return;
    card.innerHTML = `
    <h2>¡Sorpresa!</h2>
    <p>mucho más bonita con tu forma de ser, tu cariño y esa manera tan única que tienes de hacer especiales hasta los momentos más simples.
Quiero que sepas que te tengo un cariño muy sincero y que deseo de corazón que este nuevo año en tu vida te regale mucha felicidad, paz y momentos tan bonitos como los que tú haces sentir a quienes te queremos.
Gracias por existir y por ser alguien tan importante para mí. 🎂💖</p>
    <img src="img/regalo.jpg" class="foto esquina4" alt="Regalo sorpresa">
    <img src="img/globos.jpg" class="foto esquina1" alt="Regalo sorpresa">
    <img src="img/globos2.jpg" class="foto esquina2" alt="Regalo sorpresa">
    <img src="img/regalo.jpg" class="foto esquina3" alt="Regalo sorpresa">
    `;
    createConfetti(220);
}

function createConfetti(count = 220) {
    const container = document.createElement('div');
    container.className = 'confetti-container';

    const colors = ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93', '#ff8fab'];

    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = `${Math.random() * 8 + 8}px`;
        confetti.style.height = `${Math.random() * 8 + 8}px`;
        confetti.style.animationDuration = `${Math.random() * 2 + 4.5}s`;
        confetti.style.animationDelay = `${Math.random() * 1}s`;
        confetti.style.opacity = `${Math.random() * 0.5 + 0.6}`;
        container.appendChild(confetti);
    }

    document.body.appendChild(container);
    setTimeout(() => container.remove(), 9500);
}

function noGift() {
    const card = document.querySelector(".card");
    if (!card) return;
    paso = 3;
    card.innerHTML = `
    <h2>lo intentamos de nuevo😡</h2>
    <button onclick="nextStep()">Again..?😤</button>
    `;
}