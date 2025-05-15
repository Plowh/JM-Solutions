document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.glow-card').forEach(card => {
    const glow = document.createElement('div');
    glow.className = 'absolute inset-0 pointer-events-none z-0 opacity-0 transition-opacity duration-300';
    glow.style.borderRadius = 'inherit';
    card.appendChild(glow);

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.background = `radial-gradient(300px circle at ${x}px ${y}px, rgba(244, 63, 94, 0.15), transparent 60%)`;
      glow.style.opacity = 1;
    });

    card.addEventListener('mouseleave', () => {
      glow.style.opacity = 0;
    });
  });
});
