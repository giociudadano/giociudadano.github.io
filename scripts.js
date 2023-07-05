const backgroundGradient = document.querySelector('.video-background-gradient');
function updateGradient() {
  const gradientRotation = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--gradient-rotation');
  const gradientRotationValue = gradientRotation.slice(
    0,
    gradientRotation.length - 3
  );
  document.documentElement.style.setProperty(
    `--gradient-rotation`,
    ((Number(gradientRotationValue) + 5) % 360) + 'deg'
  );
}
setInterval(updateGradient, 1000);
