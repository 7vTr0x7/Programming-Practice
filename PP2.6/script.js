const decCount1 = document.querySelector("#decCount1");
const decCount2 = document.querySelector("#decCount2");
const count1 = document.querySelector("#count1");
const count2 = document.querySelector("#count2");
const totalCount = document.querySelector("#totalCount");

let count1Value = 0;
let count2Value = 0;

const totalCountValue = (c1, c2) => {
  totalCount.textContent = `Total Count: ${c1 + c2}`;
};

const initialValues = () => {
  count1Value = 20;
  count2Value = 20;

  count1.textContent = `Count 1: ${count1Value}`;
  count2.textContent = `Count 2: ${count2Value}`;

  totalCountValue(count1Value, count2Value);
};

initialValues();

decCount1.addEventListener("click", () => {
  count1Value -= 1;
  count1.textContent = `Count 1: ${count1Value}`;
  totalCountValue(count1Value, count2Value);
});
decCount2.addEventListener("click", () => {
  count2Value -= 1;
  count2.textContent = `Count 2: ${count2Value}`;
  totalCountValue(count1Value, count2Value);
});
