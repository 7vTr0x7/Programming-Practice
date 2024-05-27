const arr = [];

const fizzBuzz = () => {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
};

fizzBuzz();

const fizzBuzzUl = document.querySelector("#fizzBuzz");

const addLiElement = () => {
  for (let i = 0; i < arr.length; i++) {
    const liElement = document.createElement("li");
    liElement.textContent = `${arr[i]}`;
    fizzBuzzUl.appendChild(liElement);
  }
};

addLiElement();
