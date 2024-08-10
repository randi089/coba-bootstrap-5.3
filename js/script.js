// Script Contact Form
const scriptURL = "https://script.google.com/macros/s/AKfycbzCOmb8cRBfZfxpqI-uIcET-xad7k9ZJ3L5dLELzpVU-6Tocuv8VQo042PWju-bKG0pRw/exec";
const form = document.forms["ranfeb-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");
const myClose = document.querySelector(".my-close");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   Ketika tombol submit diklik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      //   tampilkan alert
      myAlert.classList.toggle("d-none");
      //   reset form
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// alert close di klik
myClose.addEventListener("click", () => {
  myAlert.classList.toggle("d-none");
});

// Vanilla Tilt JS
VanillaTilt.init(document.querySelectorAll(".dream-box"), {
  max: 35,
  speed: 1000,
  glare: true,
});
