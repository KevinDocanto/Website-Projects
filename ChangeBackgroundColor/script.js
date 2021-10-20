const color = document.getElementById("color");
const button = document.getElementById("button");

button.addEventListener("click", function () {
  color.textContent =
    "#" +
    ((Math.random() * 0xffffff) << 0)
      .toString(16)
      .toUpperCase()
      .padStart(6, "0");
  document.body.style.backgroundColor = color.textContent;
});
