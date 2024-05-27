const classifiedList = document.querySelector("#classifiedList");

const items = [
  "apple",
  "drumstick",
  "orange",
  "sweet potato",
  "kiwi",
  "cauliflower",
  "grape",
  "pear",
  "bottle gourd",
  "snake gourd",
];

const classify = () => {
  for (let i = 0; i < items.length; i++) {
    const li = document.createElement("li");
    if (items[i].length <= 6) {
      li.textContent = `${items[i]} - Fruit`;
    } else if (items[i].length > 6) {
      li.textContent = `${items[i]} - Vegetable`;
    }
    classifiedList.appendChild(li);
  }
};

classify();
