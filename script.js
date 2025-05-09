let chapitre = document.getElementById("chapitre");

function afficherChapitre(n) {
  if (n === 1) {
    chapitre.innerHTML = `<h2>Chapitre 1 : L’appel</h2><p>"La nuit n’était qu’un voile complice, et les mots dansaient comme des lucioles..."</p>`;
  } else if (n === 2) {
    chapitre.innerHTML = `<h2>Chapitre 2 : La chute</h2><p>Mais même les lucioles finissent par s’éteindre sous la pluie...</p>`;
  }
}

function changerPolice() {
  const body = document.body;
  body.style.fontFamily = body.style.fontFamily === "serif" ? "Orbitron, sans-serif" : "serif";
}

function zoomer(direction) {
  let current = parseFloat(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = `${current + direction}px`;
}

document.getElementById("toggleTheme").onclick = () => {
  document.body.classList.toggle("light");
};

// Anti clic droit / sélection / raccourcis
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("copy", e => e.preventDefault());
document.addEventListener("selectstart", e => e.preventDefault());

