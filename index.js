//NAV BAR------------------------------------------------------------
// window.onscroll = () => {
window.onscroll = function () {
  if (document.documentElement.scrollTop > 255) {
    document.getElementById("nav").style.position = "fixed";
    document.getElementById("nav").style.top = "0px";
  } else {
    document.getElementById("nav").style.position = "relative";
  }
};
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 180) {
    nav.style.position = "fixed";
    nav.style.top = "0";
  } else {
    nav.style.position = "relative";
  }
});
