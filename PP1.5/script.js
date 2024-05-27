const sentence = document.querySelector("#sentence");
const capitalize = document.querySelector("#capitalize");
const result = document.querySelector("#result");

capitalize.addEventListener("click", () => {
  const value = sentence.value.split(" ");
  let capitalizedValue = "";
  for (let i = 0; i < value.length; i++) {
    if (value.length < 4) {
      capitalizedValue = `${value[i].charAt(0).toUpperCase()}${value[i].slice(
        1,
        value[i].length
      )}`;

      value[i] = capitalizedValue;
    } else {
      capitalizedValue = `${value[0].charAt(0).toUpperCase()}${value[0].slice(
        1,
        value[0].length
      )}`;
      value[0] = capitalizedValue;
    }
  }

  result.textContent = `${value.join(" ")}`;
});
