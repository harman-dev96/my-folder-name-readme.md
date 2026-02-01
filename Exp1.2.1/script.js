const textarea = document.getElementById("text");
const count = document.getElementById("count");
const maxChars = 100;

textarea.addEventListener("input", () => {
  const remaining = maxChars - textarea.value.length;
  count.textContent = remaining + " characters remaining";

  if (remaining <= 10) {
    count.classList.add("warning");
  } else {
    count.classList.remove("warning");
  }
});
