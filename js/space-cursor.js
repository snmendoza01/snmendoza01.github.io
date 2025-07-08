// Only run on non‑touch devices
if (!('ontouchstart' in window)) {
  document.addEventListener("DOMContentLoaded", () => {
    const opts = {
      maxPerMove: 3,         // max particles per mousemove event
      throttleMs: 16,        // minimum time between draws (≈60fps)
      lifeMs: 600,           // how long each particle lives
      shapes: ['dot','star'],// available shapes
    };
    
    let lastTime = 0;
    document.addEventListener("mousemove", e => {
      const now = Date.now();
      if (now - lastTime < opts.throttleMs) return;
      lastTime = now;
      
      const count = Math.ceil(Math.random() * opts.maxPerMove);
      for (let i = 0; i < count; i++) {
        const shape = opts.shapes[Math.floor(Math.random() * opts.shapes.length)];
        const el = document.createElement("div");
        el.className = `cursor-star ${shape}`;
        el.style.left = `${e.pageX + (Math.random()*8-4)}px`;
        el.style.top  = `${e.pageY + (Math.random()*8-4)}px`;
        document.body.appendChild(el);
        // remove after lifeMs
        setTimeout(() => el.remove(), opts.lifeMs);
      }
    });
  });
}