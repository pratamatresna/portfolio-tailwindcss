// navbar-fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  //jadi nilai fixednav ini pasti 0 y nya
  const fixedNav = header.offsetTop;
  //ketika window scroll lebih besar dari fixedNAv kalau ada selisih maka tambah kelas navbar-fixed
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger dan nav
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  //jadi kalau ada kelas nya akan di hapus kalau ga ada maka tambah
  navMenu.classList.toggle("hidden");
});
