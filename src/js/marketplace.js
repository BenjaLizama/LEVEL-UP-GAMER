const carrusel = document.querySelector(".carrusel");
const slides = document.querySelectorAll(".slide");
let index = 0;

document.querySelector(".next").onclick = () => {
  index = (index + 1) % slides.length;
  carrusel.scrollTo({ left: slides[index].offsetLeft, behavior: "smooth" });
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  carrusel.scrollTo({ left: slides[index].offsetLeft, behavior: "smooth" });
};

corazones.forEach((corazon) => {
  corazon.addEventListener("click", () => {
    corazon.classList.toggle("liked");
  });
});

repost.forEach((repo) => {
  repo.addEventListener("click", () => {
    repo.classList.toggle("reposted");
  });
});
