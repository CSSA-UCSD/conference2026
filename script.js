document.addEventListener('DOMContentLoaded', function () {
    let overlay = document.querySelector('.magic-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'magic-overlay';
        document.body.prepend(overlay);
    }

    const sparkleCount = 18;
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'magic-sparkle';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;

        const size = 6 + Math.random() * 10;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;

        sparkle.style.animationDuration = `${2 + Math.random() * 1.5}s`;
        sparkle.style.animationDelay = `${Math.random() * 2}s`;
        sparkle.style.opacity = `${0.35 + Math.random() * 0.45}`;
        sparkle.style.animationDirection = 'alternate';

        overlay.appendChild(sparkle);
    }

    const floatTargets = [
        document.querySelector('.hero'),
        ...document.querySelectorAll('.container-card.card-skinny')
    ].filter(Boolean);

    function floatScene() {
        const now = Date.now() / 900;
        floatTargets.forEach((target, index) => {
            const phase = now + index * 0.7;
            const x = Math.sin(phase) * 3.5;
            const y = Math.cos(phase * 0.9) * 3.5;
            target.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
        requestAnimationFrame(floatScene);
    }
    requestAnimationFrame(floatScene);
});
