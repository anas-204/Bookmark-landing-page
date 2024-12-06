var features = Array.from(document.getElementsByClassName("feature"));
var content = Array.from(document.getElementsByClassName("cont"));
var arrows = Array.from(document.getElementsByClassName("arrow"));
var details = Array.from(document.getElementsByClassName("ans"));
var questions = Array.from(document.getElementsByClassName("q"));

function clickfeature(element) {
  features.forEach((ele) => {
    ele.style.borderBottom = "2px solid #EEE";
  });
  content.forEach((ele) => {
    ele.classList.add("d-none");
  });
  element.style.borderBottom = " 2px solid #70d8b9";
  content[features.indexOf(element)].classList.remove("d-none");
}

arrows.forEach((element) => {
  element.classList.add("unrotated");

  element.addEventListener("click", () => {
    if (element.classList.contains("unrotated")) {
      element.style.transform = "rotate(90deg)";
      element.classList.remove("unrotated");
      details[arrows.indexOf(element)].classList.add("d-none");
      questions[arrows.indexOf(element)].style.borderBottom =
        "1px solid #bdbaba8d";
    } else {
      element.style.transform = "rotate(0deg)";
      element.classList.add("unrotated");
      details[arrows.indexOf(element)].classList.remove("d-none");
      questions[arrows.indexOf(element)].style.borderBottom = "0px solid #EEE";
    }
  });
});
