const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const portrait = document.querySelector(".photo");
const portraitPlaceholder = document.querySelector(".photo-placeholder");

if (portrait && portraitPlaceholder) {
  portrait.addEventListener("error", () => {
    portrait.hidden = true;
    portraitPlaceholder.style.display = "grid";
  }, { once: true });
}
