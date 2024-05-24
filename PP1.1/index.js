const fizzBuzzUl = document.querySelector("#fizzBuzz");

const fizzBuzz = () => {
  for (let i = 1; i <= 20; i++) {
    const liElement = document.createElement("li");
    if (i % 3 === 0 && i % 5 === 0) {
      liElement.textContent = "FizzBuzz";
    } else if (i % 3 === 0) {
      liElement.textContent = "Fizz";
    } else if (i % 5 === 0) {
      liElement.textContent = "Buzz";
    } else {
      liElement.textContent = i;
    }
    fizzBuzzUl.appendChild(liElement);
  }
};

fizzBuzz();
