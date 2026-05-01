const root = document.documentElement;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateGradientOnScroll() {
  const maxScroll = Math.max(
    document.body.scrollHeight - window.innerHeight,
    1
  );
  const progress = clamp(window.scrollY / maxScroll, 0, 1);

  // Increase movement range for a more dynamic scroll effect.
  root.style.setProperty("--g1x", `${10 + progress * 22}%`);
  root.style.setProperty("--g1y", `${95 - progress * 32}%`);
  root.style.setProperty("--g2x", `${94 - progress * 26}%`);
  root.style.setProperty("--g2y", `${104 - progress * 36}%`);
  root.style.setProperty("--g3x", `${14 + progress * 42}%`);
  root.style.setProperty("--g3y", `${104 - progress * 30}%`);
}

window.addEventListener("scroll", updateGradientOnScroll, { passive: true });
window.addEventListener("resize", updateGradientOnScroll);
updateGradientOnScroll();