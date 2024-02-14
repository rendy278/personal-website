const nav = document.querySelector(".nav__links");
const openNavBtn = document.querySelector("#nav__toggle-open");
const closeNavBtn = document.querySelector("#nav__toggle-close");

const openNav = () => {
  nav.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
};
openNavBtn.addEventListener("click", openNav);

const closeNav = () => {
  nav.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
};
closeNavBtn.addEventListener("click", closeNav);

const ketik = new Typed(".ketik", {
  strings: ["Front End", "Web Developer", "Grapich Designer"],
  typeSpeed: 150,
  backSpeed: 90,
  loop: true,
});

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scrool", window.scrollY > 0);
});

function scrollToSmoothly(pos, time) {
  var currentPos = window.pageYOffset;
  var start = null;
  if (time == null) time = 500;
  (pos = +pos), (time = +time);
  window.requestAnimationFrame(function step(currentTime) {
    start = !start ? currentTime : start;
    var progress = currentTime - start;
    if (currentPos < pos) {
      window.scrollTo(0, ((pos - currentPos) * progress) / time + currentPos);
    } else {
      window.scrollTo(0, currentPos - ((currentPos - pos) * progress) / time);
    }
    if (progress < time) {
      window.requestAnimationFrame(step);
    } else {
      window.scrollTo(0, pos);
    }
  });
}

function sendwhatsapp() {
  var phonenumber = "+6283122895534";

  var name = document.querySelector(".name").value;
  var email = document.querySelector(".email").value;
  var phone = document.querySelector(".phone").value;
  var message = document.querySelector(".message").value;

  var url =
    "https://wa.me/" +
    phonenumber +
    "?text=" +
    "*Name :* " +
    name +
    "%0a" +
    "*Email :* " +
    email +
    "%0a" +
    "*Phone :* " +
    phone +
    "%0a" +
    "*Message :* " +
    message +
    "%0a%0a" +
    "This is an example of sending HTML form data to WhatsApp";

  window.open(url, "_blank").focus();
}

document.addEventListener("DOMContentLoaded", function () {
  var currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;
});
