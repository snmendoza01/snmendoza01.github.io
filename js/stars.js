/* docs/js/stars.js */
document.addEventListener("DOMContentLoaded", function () {
  /* particles.js needs a div#particles-js inside your page.
     Material’s <div class="md-main"> is a good target. */
  var container = document.querySelector('.md-main');
  if (!container) return;
  var canvasWrapper = document.createElement('div');
  canvasWrapper.id = 'particles-js';
  container.prepend(canvasWrapper);

  particlesJS('particles-js', {
    particles: {
      number: { value: 200, density: { enable: true, value_area: 800 } },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: { value: 1.5, random: true },
      line_linked: { enable: false },
      move: {
        enable: true,
        speed: 0.2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out'
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: false },
        onclick: { enable: false }
      }
    },
    retina_detect: true
  });
});