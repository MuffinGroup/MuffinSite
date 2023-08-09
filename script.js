var defaultTitle = "Muffin Group";

var ytbng_git = document.getElementById("ytbng_git");
var muffin_site_git = document.getElementById("ms_git");
var factorization_git = document.getElementById("fac_git");

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

// Function to convert Markdown to HTML
function convertMarkdownToHTML(markdown) {
  var converter = new showdown.Converter();
  return converter.makeHtml(markdown);
}

// Function to load and convert the Markdown file
function loadAndConvertMarkdownFile() {
  var filePath = "posts/nexus-announcement.md"; // Set the file path here
  var xhr = new XMLHttpRequest();

  xhr.onload = function () {
    if (xhr.status === 200) {
      var markdownContent = xhr.responseText;
      var htmlOutput = convertMarkdownToHTML(markdownContent);
      document.getElementById("html-output").innerHTML = htmlOutput;
    }
  };

  xhr.open("GET", filePath, true);
  xhr.send();
}

window.addEventListener("scroll", function () {
  var header = document.querySelector(".sticky-header");
  if (window.scrollY > 150) {
    header.classList.add("transparent");
  } else {
    header.classList.remove("transparent");
  }
});
