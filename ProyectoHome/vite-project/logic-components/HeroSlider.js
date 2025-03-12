const prevButton = document.querySelector('.hero-control .prev');
const nextButton = document.querySelector('.hero-control .next');

if (prevButton && nextButton) {
  // En una implementación real, tendrías múltiples diapositivas
  // Para este ejemplo, solo agregaremos oyentes de eventos de clic
  prevButton.addEventListener('click', () => {
    console.log('Diapositiva anterior');
  });
  
  nextButton.addEventListener('click', () => {
    console.log('Siguiente diapositiva');
  });
}

else {
  console.log("o prev o next no funcionan")
}