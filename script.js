function convertUnit() {
  const cm = parseFloat(document.getElementById("cm").value);
  const result = document.getElementById("conversion-result");

  if (isNaN(cm)) {
    result.textContent = "❗ Please enter a valid number.";
    return;
  }

  const inches = cm / 2.54;
  result.textContent = `${cm} cm = ${inches.toFixed(2)} inches`;
}