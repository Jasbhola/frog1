function generateAdvice() {
  const messages = [
    "You've got this. One step at a time.",
    "Today is yours — go make it magical.",
    "Even slow progress is still progress.",
    "Take a breath. Reset. You've got time.",
    "Be kind to yourself today, okay?"
  ];

  const random = Math.floor(Math.random() * messages.length);
  document.getElementById("daily-text").innerText = messages[random];
}
