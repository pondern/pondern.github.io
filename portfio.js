//   // Configuration for the particle background
const particleConfig = {
    particleNumber: 100,
    particleSpeed: 1,
    particleSize: 2,
    particleColor: '#ffffff',
};

// // Create particles
function createParticles() {
    const particles = document.getElementById('particles');
    for (let i = 0; i < particleConfig.particleNumber; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particles.appendChild(particle);
    }
}

// // Move particles
function moveParticles() {
    const particles = document.getElementsByClassName('particle');
    for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const animationDuration = Math.random() * particleConfig.particleSpeed + 2;

        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = particleConfig.particleSize + 'px';
        particle.style.height = particleConfig.particleSize + 'px';
        particle.style.backgroundColor = particleConfig.particleColor;
        particle.style.animation = `move ${animationDuration}s linear infinite`;
    }
}

// // Initialize particles
createParticles();
moveParticles();

particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.5,
            random: true,
        },
        size: {
            value: 3,
        },
        move: {
            enable: true,
            speed: 1,
        },
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
            },
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4,
            },
        },
    },
});
