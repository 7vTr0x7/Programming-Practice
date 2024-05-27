const count1Btn = document.querySelector("#count1Btn");
const count2Btn = document.querySelector("#count2Btn");
const count2 = document.querySelector("#count2");
const count1 = document.querySelector("#count1");
const totalCount = document.querySelector("#totalCount");

let count1Value = 0;
let count2Value = 0;
let totalCountValue = 0;

const initialValues = () => {
    count1.
}

count1Btn.addEventListener("click", () => {
  count1Value += 1;
  count1.textContent = `${count1Value}`;
});

count2Btn.addEventListener("click", () => {
  count2Value += 1;
  count2.textContent = `Count 2: ${count2Value}`;
});
