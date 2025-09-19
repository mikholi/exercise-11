function showAnswers() {
  // Vastaukset taulukossa
  const answers = [
    "Se on Microsoftin pilvipalvelualusta, jossa voi käyttää esim. tietokantoja ja virtuaalikoneita.",
    "Palvelut toimivat internetin kautta ilman omia fyysisiä palvelimia.",
    "Ei. Azure tukee myös Linuxia ja monia muita teknologioita.",
    "Se on palvelu, johon voi tallentaa tiedostoja, kuvia ja varmuuskopioita.",
    "Ei välttämättä. Azure toimii selaimen kautta, mutta lisätyökaluja voi asentaa."
  ];

  // Haetaan kaikki vastaus-elementit
  const answerElements = document.querySelectorAll(".answer");

  // Käydään läpi ja lisätään tekstit näkyviin
  answerElements.forEach((el, index) => {
    el.textContent = answers[index];
    el.style.display = "block";
  });
}
