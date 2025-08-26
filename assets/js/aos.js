document.addEventListener("DOMContentLoaded", function() {
  AOS.init({
    duration: 1000,  // Duration of animation
    easing: 'ease-in-out',  // Easing function for animation
    once: true,  // Animation will happen once per element, not on every scroll
    offset: 200,  // How far from the viewport the element should be before animating
  });
});