const count1Btn = document.querySelector("#count1Btn");
const count2Btn = document.querySelector("#count2Btn");
const count2 = document.querySelector("#count2");
const count1 = document.querySelector("#count1");
const countDiff = document.querySelector("#countDiff");

let count1Value = 0;
let count2Value = 0;

const countDiffCheck = (c1, c2) => {
  if (c1 > c2) {
    countDiff.textContent = "Count 1 is more than Count 2.";
  } else if (c2 > c1) {
    countDiff.textContent = "Count 2 is more than Count 1.";
  } else {
    countDiff.textContent = "Count 1 is equal to Count 2.";
  }
};

count1Btn.addEventListener("click", () => {
  count1Value += 1;
  count1.textContent = `Count 1: ${count1Value}`;

  countDiffCheck(count1Value, count2Value);
});

count2Btn.addEventListener("click", () => {
  count2Value += 1;
  count2.textContent = `Count 2: ${count2Value}`;
  countDiffCheck(count1Value, count2Value);
});
