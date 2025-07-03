const quotes = [
  "You're doing better than you think. ✨",
  "Just show up. That's half the win. 💪",
  "Your story is just beginning. Keep going. 🌙",
  "Progress is still progress, no matter how small.",
  "You’re not lazy—you’re just recharging. 🔋",
  "Believe in your ghostly power. 👻"
];

function generateAdvice() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("daily-text").innerText = quotes[random];
}
