var button = document.getElementById("button1");

button.addEventListener("click", function() {
  changeTitle(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
  openSite("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
});

function changeTitle(title) {
  document.title = title;
}

function openSite(link) {
  window.open(link,  "_blank")
}

const toggle = document.getElementById('myToggle');

toggle.addEventListener('change', function() {
  if (this.checked) {
    // Toggle is on
    console.log('Toggle is on');
  } else {
    // Toggle is off
    console.log('Toggle is off');
  }
});