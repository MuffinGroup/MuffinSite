var ytButton = document.getElementById("youtubeButton");
var dcButton = document.getElementById("discordButton");
var ghButton = document.getElementById("githubButton");
var defaultTitle = "Muffin Group";

var ytbng_git = document.getElementById("ytbng_git");
var muffin_site_git = document.getElementById("ms_git");
var factorization_git = document.getElementById("fac_git");

var contactButton = document.getElementById("link_button");

ghButton.addEventListener("click", function () {
  openSite("https://github.com/MuffinGroup");
});

ytButton.addEventListener("click", function () {
  openSite("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});

dcButton.addEventListener("click", function () {
  openSite("https://discord.gg/XGvWxtgaaB");
});

contactButton.addEventListener("click", function () {
  scrollToSection(document.getElementById("contact"));
  openSite("https://github.com/MuffinGroup/yet-to-be-named-game");
});

ytbng_git.addEventListener("click", function () {
  openSite("https://github.com/MuffinGroup/yet-to-be-named-game");
});

const button = document.getElementById("ytbng_git");

button.addEventListener("click", function () {
  console.log("Button clicked!");
  openSite("https://github.com/MuffinGroup/yet-to-be-named-game");
});

function changeTitle(title) {
  document.title = title;
}

function openSite(link) {
  window.open(link, "_blank");
}

function scrollToSection() {
  var section = document.getElementById("contact");
  section.scrollIntoView({ behavior: "smooth" });
}
