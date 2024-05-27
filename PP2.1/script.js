const colorCode = document.querySelector("#colorCode");
const changeSection1 = document.querySelector("#changeSection1");
const changeSection2 = document.querySelector("#changeSection2");
const error = document.querySelector("#error");
const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");

changeSection1.addEventListener("click", () => {
  if (colorCode.value === "") {
    error.style.display = "block";
  } else {
    section1.style.backgroundColor = colorCode.value;
  }
});

changeSection2.addEventListener("click", () => {
  if (colorCode.value === "") {
    error.style.display = "block";
  } else {
    section2.style.backgroundColor = colorCode.value;
  }
});
