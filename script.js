let userBMI = document.querySelector(".bmi");
let description = document.querySelector(".description");
let body = document.querySelector("body");
let border = document.querySelector(".border");
let h1 = document.querySelector("h1");

let bmiCalc = () => {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;
  let bmi = Math.round((weight / height ** 2) * 10) / 10;
  // userBMI.textContent = bmi;
  description.style.display = "block";

  let output = 0;
  const timer = setInterval(() => {
    userBMI.textContent = output.toFixed(1);
    if (output.toFixed(1) == bmi) {
      clearInterval(timer);
    } else {
      output += 0.1;
    }
  }, 1);

  if (bmi < 18.5) {
    description.textContent = "Underweight";
    blue();
  } else if (bmi == 18.5 || bmi <= 24.9) {
    description.textContent = "Normal weight";
    green();
  } else if (bmi <= 29.9) {
    description.textContent = "Overweight";
    yellow();
  } else if (bmi <= 34.9) {
    description.textContent = "Obese (class I)";
    orange();
  } else if (bmi <= 39.9) {
    description.textContent = "Obese (class II)";
    red();
  } else if (bmi > 40) {
    description.textContent = "Obese (class III)";
    red();
  }
};

function blue() {
  body.classList.add("body--blue");
  userBMI.classList.add("bmi--blue");
  h1.classList.add("h1--blue");
}
function green() {
  body.classList.add("body--green");
  userBMI.classList.add("bmi--green");
  h1.classList.add("h1--green");
}
function yellow() {
  body.classList.add("body--yellow");
  userBMI.classList.add("bmi--yellow");
  h1.classList.add("h1--yellow");
}
function orange() {
  body.classList.add("body--orange");
  userBMI.classList.add("bmi--orange");
  h1.classList.add("h1--orange");
}
function red() {
  body.classList.add("body--red");
  userBMI.classList.add("bmi--red");
  h1.classList.add("h1--red");
}
