document.getElementById('bottoneSpavento').addEventListener('click', function() {
  document.body.style.backgroundColor = '#000'; // Nero
  document.body.style.color = '#fff'; // Bianco
  document.getElementById('titolo').style.color = '#ff0000'; // Rosso
  document.getElementById('titolo').textContent = 'ATTENZIONE!';
  document.getElementById('testo').textContent = 'Qualcosa di terribile sta per accadere...';
  document.body.style.fontFamily = 'monospace'; // Cambia il font
  document.getElementById('immagineSpaventosa').style.display = 'block'; // Mostra l'immagine
  // Aggiungiamo un'animazione semplice
  let opacity = 0;
  let intervalId = setInterval(function() {
    opacity += 0.1;
    document.getElementById('immagineSpaventosa').style.opacity = opacity;
    if (opacity >= 1) {
      clearInterval(intervalId);
    }
  }, 100); // 100 millisecondi
});