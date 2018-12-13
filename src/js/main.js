function openSlideMenu() {
  var rect = document.body.getBoundingClientRect();
  console.log(rect.y);
  document.getElementById("side-menu").style.width = "250px";
  document.getElementById("close-cross").style.display = "inline-block";
  document.getElementById("hamburger").style.display = "none";
  document.body.style.overflow = "hidden";
}

function closeSlideMenu() {
  document.getElementById("side-menu").style.width = "0";
  document.getElementById("close-cross").style.display = "none";
  document.getElementById("hamburger").style.display = "inline-block";
  document.body.style.overflow = "visible";
}
