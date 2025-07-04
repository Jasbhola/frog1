// Tracks completed tasks using localStorage
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".task-button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const taskId = btn.dataset.task;
      if (taskId) {
        localStorage.setItem(`task${taskId}`, "complete");
      }
    });
  });

  const nextTask = document.querySelector(".next-task");

  if (nextTask) {
    const required = nextTask.dataset.requires;
    if (required && localStorage.getItem(`task${required}`) !== "complete") {
      nextTask.classList.add("disabled");
      nextTask.setAttribute("aria-disabled", "true");
      nextTask.addEventListener("click", (e) => e.preventDefault());
    }
  }
});
