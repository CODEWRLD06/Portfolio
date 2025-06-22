const introText = document.getElementById("introText");

const flirtyLines = [
  "Hey, I’m Emmanuel — your browser’s favorite developer, and maybe yours too.",
  "I code better than your ex texts back.",
  "I could write you a website… or a love letter.",
  "Building interfaces smoother than my DMs.",
  "I build websites... and steal hearts on the side."
];

let index = 0;

setInterval(() => {
  introText.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % flirtyLines.length;
    introText.textContent = flirtyLines[index];
    introText.style.opacity = 1;
  }, 500);
}, 4000);
