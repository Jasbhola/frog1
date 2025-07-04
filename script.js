const tasks = [
  {
    text: "Step 1: Get up, stretch, and drink water 💧",
    gif: "https://media.giphy.com/media/3o7abB06u9bNzA8lu8/giphy.gif"
  },
  {
    text: "Step 2: Go wash your face and brush those teeth 💋",
    gif: "https://media.giphy.com/media/TxVVB6PfWMjE4/giphy.gif"
  },
  {
    text: "Step 3: Put on something comfy or cute. We're not staying crusty 😤",
    gif: "https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif"
  },
  {
    text: "Step 4: Make your bed or clean one corner 🧼",
    gif: "https://media.giphy.com/media/xT1XGY5hAFjFauPylm/giphy.gif"
  },
  {
    text: "Step 5: Eat something or at least grab a snack 🍓",
    gif: "https://media.giphy.com/media/fAnEC88LccN7a/giphy.gif"
  },
  {
    text: "Step 6: 10 minutes of deep focus (homework, biz, goal stuff) 📚",
    gif: "https://media.giphy.com/media/WtTnAfZn6aVJfFz67j/giphy.gif"
  },
  {
    text: "Step 7: Take 5 mins to scroll guilt-free 😎",
    gif: "https://media.giphy.com/media/12vJgj7zMN3Hry/giphy.gif"
  },
  {
    text: "Step 8: Do something creative or expressive (write, draw, post) 🎨",
    gif: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif"
  },
  {
    text: "Step 9: Reflect. What’s one thing you’re proud of today? 🌙",
    gif: "https://media.giphy.com/media/l0MYB8Ory7Hqefo9a/giphy.gif"
  },
  {
    text: "Step 10: Wind down. Light off, phone down, rest up baddie 🛌",
    gif: "https://media.giphy.com/media/l3vR85PnGsBwu1PFK/giphy.gif"
  }
];

let currentTask = 0;

function startRoutine() {
  document.getElementById("start-btn").style.display = "none";
  document.getElementById("task-area").style.display = "block";
  showTask();
}

function nextTask() {
  currentTask++;
  if (currentTask < tasks.length) {
    showTask();
  } else {
    document.getElementById("task-text").innerText = "✨ You slayed today, queen. Proud of you.";
    document.getElementById("gif").src = "https://media.giphy.com/media/xUOwGch8I6UxPq1aNW/giphy.gif";
    document.getElementById("progress-text").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
  }
}

function showTask() {
  document.getElementById("task-text").innerText = tasks[currentTask].text;
  document.getElementById("gif").src = tasks[currentTask].gif;
  document.getElementById("progress-text").innerText = `Task ${currentTask + 1} of ${tasks.length}`;
}
