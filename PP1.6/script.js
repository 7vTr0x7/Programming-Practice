const classifiedNumbers = document.querySelector("#classifiedNumbers");

const numbers = [2, -5, 6, 7, -8, 0, 10, 23, -13, 14, 18, -32, 78];

const classify = () => {
  for (let i = 0; i < numbers.length; i++) {
    const li = document.createElement("li");
    if (numbers[i] > 0) {
      li.innerHTML = `<b>${numbers[i]} - ${
        numbers[i].toString().length === 1
          ? "Single Digit Positive Number"
          : "Double Digit Positive Number"
      }</b>`;
    } else if (numbers[i] < 0) {
      li.innerHTML = `<b>${numbers[i]} - ${
        numbers[i].toString().length === 2
          ? "Single Digit Negative Number"
          : "Double Digit Negative Number"
      }</b>`;

      console.log(numbers[i].toLocaleString().length);
    } else {
      li.innerHTML = `<b>${numbers[i]} - Zero</b>`;
    }

    classifiedNumbers.appendChild(li);
  }
};

classify();
