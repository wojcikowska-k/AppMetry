const calculateBtnEl = document.getElementById("calculate-btn");
const rollThickEl = document.getElementById("roll-thick");
const veneerThickEl = document.getElementById("veneer-thick");
const totalOutputEl = document.getElementById("total-output");

// ### EVENTS

calculateBtnEl.addEventListener("click", () => {
  totalOutputEl.innerHTML = calculate(veneerThickEl.value, rollThickEl.value);
  rollThickEl.value = "";
});

// ### CALCULATE

const calculate = (veneerThick, rollThick) => {
  const INSIDE_ROLL_RADIUS = 50;
  let total = 0;
  for (i = INSIDE_ROLL_RADIUS; i <= rollThick; i += veneerThick) {
    total = total + 2 * Math.PI * i;
  }
  return `${Math.round(total) / 10} cm`;
};
