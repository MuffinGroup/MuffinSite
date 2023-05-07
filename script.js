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

document.addEventListener('mousemove', function(event) {
  var followingImage = document.getElementById('following-image');
  var container = document.querySelector('.container');

  var containerRect = container.getBoundingClientRect();

  var mouseX = event.clientX - containerRect.left;
  var mouseY = event.clientY - containerRect.top;

  followingImage.style.left = mouseX + 'px';
  followingImage.style.top = mouseY + 'px';
});