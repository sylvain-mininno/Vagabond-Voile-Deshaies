//-----SLIDER---------------------------------------------
const sliderGallerie = document.querySelector(".slider-gallerie");
const srcEncoursSlider = document.querySelector(".img-visible-gallerie");
const allPicsGallerie = Array.from(document.querySelectorAll(".item img"));
const rightGallerie = document.querySelector(".btn-right");
const leftGallerie = document.querySelector(".btn-left");
const fermerGallerie = document.querySelector(".btn-fermer-gallerie");

let photoEnCours;
let indexEnCours;

allPicsGallerie.forEach((item) => {
  item.addEventListener("click", (e) => {
    sliderGallerie.style.display = "block";
    srcEncoursSlider.src = e.target.src;
    photoEnCours = e.target;
    indexEnCours = allPicsGallerie.indexOf(photoEnCours);
    console.log(indexEnCours);
  });
});
rightGallerie.addEventListener("click", () => {
  if (indexEnCours === 30) {
    indexEnCours = 0;
    srcEncoursSlider.src = allPicsGallerie[indexEnCours].src;
    photoEnCours = allPicsGallerie[indexEnCours];
    return;
  }
  srcEncoursSlider.src = allPicsGallerie[indexEnCours + 1].src;
  photoEnCours = allPicsGallerie[indexEnCours + 1];
  indexEnCours = allPicsGallerie.indexOf(photoEnCours);
});
leftGallerie.addEventListener("click", () => {
  if (indexEnCours === 0) {
    indexEnCours = 30;
    srcEncoursSlider.src = allPicsGallerie[indexEnCours].src;
    photoEnCours = allPicsGallerie[indexEnCours];
    return;
  }

  srcEncoursSlider.src = allPicsGallerie[indexEnCours - 1].src;
  photoEnCours = allPicsGallerie[indexEnCours - 1];
  indexEnCours = allPicsGallerie.indexOf(photoEnCours);
});
fermerGallerie.addEventListener("click", (e) => {
  sliderGallerie.style.display = "none";
});
