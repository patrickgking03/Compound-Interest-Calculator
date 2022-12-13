const initialBox = document.querySelector("#initial");
const interestBox = document.querySelector("#interest");
const timesBox = document.querySelector("#times");
const yearsBox = document.querySelector("#years");
const earnedSpan = document.querySelector("#earned");
const totalSpan = document.querySelector("#total");

initialBox.addEventListener("input", computeCI);
interestBox.addEventListener("input", computeCI);
timesBox.addEventListener("input", computeCI);
yearsBox.addEventListener("input", computeCI);

function computeCI() {
  const initialAmount = Number(initialBox.value);
  const interestRate = Number(interestBox.value);
  const timesCompounded = Number(timesBox.value);
  const yearsTotal = Number(yearsBox.value);
  var p = initialAmount;
  var r = interestRate * 0.01;
  var n = timesCompounded;
  var t = yearsTotal;
  const totalAmount = p * Math.pow(1 + r / n, n * t);
  const earnedAmount = totalAmount - initialAmount;
  earnedSpan.textContent = earnedAmount.toFixed(2);
  earnedSpan.textContent = earnedAmount.toLocaleString("en-US");
  totalSpan.textContent = totalAmount.toFixed(2);
  totalSpan.textContent = totalAmount.toLocaleString("en-US");
}
