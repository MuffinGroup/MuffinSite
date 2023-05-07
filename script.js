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

$(document).mousemove(function(e) {
  $("#follow").css({
    left: e.pageX,
    top: e.pageY
  });
});