function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const arr = [];

const primeAndFizzBuzz = () => {
  for (let i = 1; i <= 30; i++) {
    if (isPrime(i) && i % 3 === 0) {
      arr.push("FizzPrime");
    } else if (isPrime(i) && i % 5 === 0) {
      arr.push("BuzzPrime");
    } else if (isPrime(i)) {
      arr.push("Prime");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
};

primeAndFizzBuzz();

const orderedList = document.querySelector("#orderedList");

const createLiElement = () => {
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `<b>${arr[i]}</b>`;
    orderedList.appendChild(li);
  }
};

createLiElement();
