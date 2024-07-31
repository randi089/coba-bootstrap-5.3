const galleryImage = document.querySelectorAll(".gallery-img");
galleryImage.forEach((img, i) => {
  img.dataset.aos = "fade-down";
  img.dataset.aosDelay = i * 100;
  img.dataset.aosDuration = 1000;
});

AOS.init({
  once: true,
  duration: 2000,
});
