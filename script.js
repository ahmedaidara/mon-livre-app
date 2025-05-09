// script.js

const chapters = [
  {
    title: "Chapitre 1 : L'aube",
    content: "Ceci est le début d'une grande aventure. Le soleil se lève sur un monde nouveau..."
  },
  {
    title: "Chapitre 2 : Le doute",
    content: "L'ombre du doute s'insinue dans l'esprit du héros. Que doit-il faire maintenant ?"
  },
  {
    title: "Chapitre 3 : L'épreuve",
    content: "Les épreuves surgissent. Chaque pas est un défi, chaque souffle une victoire."
  },
  {
    title: "Chapitre 4 : L'éveil",
    content: "Une révélation éclaire l'esprit du héros. Tout devient clair."
  },
  {
    title: "Chapitre 5 : Le triomphe",
    content: "La victoire est à portée. Le monde l'acclame. La légende est née."
  }
];

let currentFontSize = 16;
let favorites = [];

function loadChapter(index) {
  const chapter = chapters[index];
  document.getElementById("chapter-title").innerText = chapter.title;
  document.getElementById("chapter-content").innerText = chapter.content;
  window.currentChapter = index;
}

function toggleFavorite() {
  if (!favorites.includes(window.currentChapter)) {
    favorites.push(window.currentChapter);
    updateFavorites();
  }
}

function updateFavorites() {
  const list = document.getElementById("favorites-list");
  list.innerHTML = "";
  favorites.forEach(index => {
    const item = document.createElement("li");
    item.textContent = chapters[index].title;
    item.onclick = () => loadChapter(index);
    list.appendChild(item);
  });
}

function readAloud() {
  const content = document.getElementById("chapter-content").innerText;
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(content);
  synth.speak(utterance);
}

document.getElementById("toggle-mode").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

document.getElementById("zoom-in").onclick = () => {
  currentFontSize += 2;
  document.getElementById("chapter-content").style.fontSize = currentFontSize + "px";
};

document.getElementById("zoom-out").onclick = () => {
  currentFontSize = Math.max(12, currentFontSize - 2);
  document.getElementById("chapter-content").style.fontSize = currentFontSize + "px";
};

// Sécurité basique : empêche les sélections et le clic droit
window.onload = () => {
  document.body.onselectstart = () => false;
  document.body.oncopy = () => false;
  document.body.onkeydown = (e) => {
    if ((e.ctrlKey || e.metaKey) && ["c", "p", "s"].includes(e.key.toLowerCase())) {
      e.preventDefault();
    }
  };
};
