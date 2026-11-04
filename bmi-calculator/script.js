function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const heightCm = parseFloat(document.getElementById("height").value);
  const resultEl = document.getElementById("result");

  if (!weight || !heightCm) {
    resultEl.textContent = "Ju lutem plotësoni të dyja fushat!";
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);

  let category = "";

  if (bmi < 18.5) {
    category = "Nën peshë";
  } else if (bmi < 25) {
    category = "Peshë normale";
  } else if (bmi < 30) {
    category = "Mbipeshë";
  } else {
    category = "Obezitet";
  }

  resultEl.textContent = "BMI juaj: " + bmi.toFixed(1) + " (" + category + ")";
}
