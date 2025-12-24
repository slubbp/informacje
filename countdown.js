const weddingDate = new Date(2026, 5, 27, 15, 0, 0).getTime();

  // Funkcja do aktualizacji i pulsowania tylko przy zmianie
  function updateValue(id, newValue) {
    const el = document.getElementById(id);
    if (el.innerText !== String(newValue)) {
      el.innerText = newValue;
      el.classList.add("pulse");
      setTimeout(() => el.classList.remove("pulse"), 600); // usuń po animacji
    }
  }

  const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    updateValue("days", days);
    updateValue("hours", hours);
    updateValue("minutes", minutes);
    updateValue("seconds", seconds);

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "<h3>Dziś jest nasz ślub! 🎊</h3>";
    }
  }, 1000);