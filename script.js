const quotes = [
  "You are doing better than you think.",
  "Don’t be afraid to dream bigger.",
  "One small step a day is still progress.",
  "You’ve survived 100% of your worst days.",
  "Your energy is your power. Protect it.",
  "Be proud of how far you’ve come."
];

function generateAdvice() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("daily-text").innerText = quotes[random];
}
