function toggleMobileMenu() {
  var x = document.getElementById("links");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
    x.style.opacity = 0;
  } else {
    x.style.visibility = "visible";
    x.style.opacity = 1;
  }
}

function toggleModalInfo() {
  var x = document.getElementById("modal");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
    document.body.style.overflow = "auto";
    x.style.opacity = 0;
  } else {
    x.style.visibility = "visible";
    document.body.style.overflow = "hidden";
    x.style.opacity = 1;
  }
}
