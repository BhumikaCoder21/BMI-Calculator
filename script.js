const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  if (height === "" || isNaN(height) || height < 0) {
    result.innerHTML = `Please enter a valid height : ${height} is invalid`;
    return;
  }
  if (weight === "" || isNaN(weight) || weight < 0) {
    result.innerHTML = `Please enter a valid weight : ${weight} is invalid`;
    return;
  }
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  if (bmi < 18.6) {
    result.innerHTML = `UnderWeight : BMI is ${bmi}`;
  } else if (bmi < 24.9) {
    result.innerHTML = `Normal Range : BMI is ${bmi}`;
  } else {
    result.innerHTML = `OverWeight : BMI is ${bmi}`;
  }
});
