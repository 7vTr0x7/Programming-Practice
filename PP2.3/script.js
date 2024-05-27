const count1Btn = document.querySelector("#count1Btn");
const count2Btn = document.querySelector("#count2Btn");
const count2 = document.querySelector("#count2");
const count1 = document.querySelector("#count1");

let count1Value = 0;
let count2Value = 0;

count1Btn.addEventListener("click", () => {
  const p = document.createElement("span");
  count1Value += 1;
  p.innerHTML = `${count1Value}`;
  count1.appendChild(p);
});

count2Btn.addEventListener("click", () => {
  const p = document.createElement("span");
  count2Value += 1;
  p.textContent = `${count2Value}`;
  count2.appendChild(p);
});
