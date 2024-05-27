const unorderedList = document.querySelector("#unorderedList");
const numberInput = document.querySelector("#numberInput");
const generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", () => {
  unorderedList.innerHTML = "";
  for (let i = 1; i <= 12; i++) {
    const li = document.createElement("li");
    li.innerHTML = `${numberInput.value} * ${i} = ${numberInput.value * i}`;
    unorderedList.appendChild(li);
  }
});
