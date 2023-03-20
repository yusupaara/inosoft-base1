function openNav() {
  document.getElementById("sideMenu").style.width = "20vw";
  document.getElementById("main").style.marginLeft = "20vw";
  document.getElementById("searchContainer").style.visibility = "hidden";
  document.getElementById("tagline").style.visibility = "hidden";
}

function closeNav() {
  document.getElementById("sideMenu").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("searchContainer").style.visibility = "visible";
  document.getElementById("tagline").style.visibility = "visible";
}

function expand() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("moreButton");
  var scroll = document.getElementById("articleHead");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
    scroll.style.overflow = "hidden";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
    scroll.style.overflow = "scroll";
  }
}

function expand1() {
  var dots1 = document.getElementById("dots1");
  var moreText1 = document.getElementById("more1");
  var btnText1 = document.getElementById("moreButton1");
  var scroll1 = document.getElementById("article1");
  var vline1 = document.getElementById("vline1");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerHTML = "Read more";
    moreText1.style.display = "none";
    scroll1.style.overflow = "hidden";
    vline1.style.height = "20vw"
  } else {
    dots1.style.display = "none";
    btnText1.innerHTML = "Read less";
    moreText1.style.display = "inline";
    scroll1.style.overflow = "scroll";
    vline1.style.height = "33.3vw"
  }
}

function expand2() {
  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("moreButton2");
  var scroll2 = document.getElementById("article2");
  var vline1 = document.getElementById("vline1");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more";
    moreText2.style.display = "none";
    scroll2.style.overflow = "hidden";
    vline1.style.height = "20vw"
    vline2.style.height = "20vw"
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less";
    moreText2.style.display = "inline";
    scroll2.style.overflow = "scroll";
    vline1.style.height = "33.3vw"
    vline2.style.height = "33.3vw"
  }
}

function expand3() {
  var dots3 = document.getElementById("dots3");
  var moreText3 = document.getElementById("more3");
  var btnText3 = document.getElementById("moreButton3");
  var scroll3 = document.getElementById("article3");
  var vline2 = document.getElementById("vline2");

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText3.innerHTML = "Read more";
    moreText3.style.display = "none";
    scroll3.style.overflow = "hidden";
    vline2.style.height = "20vw"
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "Read less";
    moreText3.style.display = "inline";
    scroll3.style.overflow = "scroll";
    vline2.style.height = "33.3vw"
  }
}