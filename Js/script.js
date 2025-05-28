const targets = document.querySelectorAll('[data-target]');
const contents = document.querySelectorAll('[data-content]');

targets.forEach(item => {
  item.addEventListener("click", () => {
    contents.forEach(c => c.classList.remove("active"));
    const targetContent = document.querySelector(item.dataset.target);
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});
