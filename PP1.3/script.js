const arr = [];

const squareOfOddNEven = () => {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      arr.push(`Even: ${i ** 2}`);
    } else {
      arr.push(`Odd: ${i ** 2}`);
    }
  }
};

squareOfOddNEven();

const orderedList = document.querySelector("#orderedList");

const liElements = () => {
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${arr[i]}`;
    orderedList.appendChild(li);
  }
};

liElements();
