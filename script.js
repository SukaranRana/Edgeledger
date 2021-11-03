"use strict";

// Map
const initMap = function () {
  const coords = [28.7041, 77.1025];
  // Inserting Map
  const map = L.map("map").setView(coords, 13);
  L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  // Inserting Marker
  L.marker(coords)
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 100,
        minWidth: 50,
        closeButton: false,
      })
    )
    .setPopupContent("Reach Us")
    .openPopup();
};

// Smooth Scrolling
const smoothScrolling = function () {
  const home = document.getElementById("home");
  const what = document.getElementById("what");
  const who = document.getElementById("who");
  const contact = document.getElementById("contact");

  const homebtn = document.querySelector(".home");
  const whatbtns = document.querySelectorAll(".what");
  const whobtn = document.querySelector(".who");
  const contactbtn = document.querySelector(".contact");

  homebtn.addEventListener("click", function () {
    home.scrollIntoView({ behavior: "smooth" });
  });
  whatbtns.forEach((whatBtn) =>
    whatBtn.addEventListener("click", function () {
      what.scrollIntoView({ behavior: "smooth" });
    })
  );
  whobtn.addEventListener("click", function () {
    who.scrollIntoView({ behavior: "smooth" });
  });
  contactbtn.addEventListener("click", function () {
    contact.scrollIntoView({ behavior: "smooth" });
  });
};
const hamburgerFunction = function () {
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".hamburger").classList.toggle("openHamburger");
    setTimeout(() => {
      document.querySelector(".nav-list").classList.toggle("none");
    }, 500);
  });
};

initMap();
smoothScrolling();
hamburgerFunction();
