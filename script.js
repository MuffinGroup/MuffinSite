var button = document.getElementById("button1");

button.addEventListener("click", function() {
  changeTitle(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
});

function changeTitle(title) {
  document.title = title;
}