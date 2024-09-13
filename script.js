function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  if (weight && height) {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const result = document.getElementById("result");

    result.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;

    if (bmi < 18.5) {
      result.innerHTML += " (Underweight)";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      result.innerHTML += " (Normal weight)";
    } else if (bmi >= 25 && bmi < 29.9) {
      result.innerHTML += " (Overweight)";
    } else {
      result.innerHTML += " (Obesity)";
    }
  } else {
    alert("Please enter both weight and height");
  }
}
