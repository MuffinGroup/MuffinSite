var button = document.getElementById("button1");
var iconButton = document.getElementsByClassName("githubButton")
var defaultTitle = "Muffin Group"

button.addEventListener("click", function() {
  changeTitle(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
  openSite("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
});

iconButton.addEventListener("mouseover", function() {
  this.style.cursor = ""
})

function changeTitle(title) {
  document.title = title;
}

function openSite(link) {
  window.open(link,  "_blank")
}