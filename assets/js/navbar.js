window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("bar").style.padding = "0 0";
    document.getElementById("logo").style.fontSize = "20px";
  } else {
    document.getElementById("bar").style.padding = "50px 0";
    document.getElementById("logo").style.fontSize = "35px";
  }
}