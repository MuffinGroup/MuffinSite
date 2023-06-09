var button = document.getElementById("button1");
var ytButton = document.getElementById("youtubeButton");
var dcButton = document.getElementById("discordButton");
var ghButton = document.getElementById("githubButton");
var contactButton = document.getElementById("contactButton");
var defaultTitle = "Muffin Group"
let op = 0
const opr = 0
var test = 0

button.addEventListener("click", function() {
  changeTitle(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
  openSite("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
});

ghButton.addEventListener("click", function() {
  openSite("https://github.com/MuffinGroup")
});

ytButton.addEventListener("click", function() {
  openSite("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
});

dcButton.addEventListener("click", function() {
  openSite("https://discord.gg/XGvWxtgaaB")
});

contactButton.addEventListener("click", function() {
  scrollToSection()
  console.log("uuw")
})

function changeTitle(title) {
  document.title = title;
}

function openSite(link) {
  window.open(link,  "_blank")
}

function scrollToSection() {
    var section = document.getElementById("contact")
    section.scrollIntoView({ behavior: "smooth" })
}