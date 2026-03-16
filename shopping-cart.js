/*
  shopping-cart.js
  Calculates the total cost for shopping cart items.
  Attribution: Input handling and parseFloat/Number patterns inspired by MDN.
  Source: https://developer.mozilla.org/
*/

const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

function valueAsNumber(id) {
  const rawValue = document.getElementById(id).value;
  const parsed = parseFloat(rawValue);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

function calculateTotalCost() {
  // Variables for quantities and prices (numeric data type).
  const quantity1 = valueAsNumber("quantity1");
  const price1 = valueAsNumber("price1");

  const quantity2 = valueAsNumber("quantity2");
  const price2 = valueAsNumber("price2");

  const quantity3 = valueAsNumber("quantity3");
  const price3 = valueAsNumber("price3");

  const quantity4 = valueAsNumber("quantity4");
  const price4 = valueAsNumber("price4");

  // Item names as string variables.
  const itemName1 = document.getElementById("itemName1").value || "Item 1";
  const itemName2 = document.getElementById("itemName2").value || "Item 2";
  const itemName3 = document.getElementById("itemName3").value || "Item 3";
  const itemName4 = document.getElementById("itemName4").value || "Item 4";

  // Calculate individual totals.
  const itemTotal1 = quantity1 * price1;
  const itemTotal2 = quantity2 * price2;
  const itemTotal3 = quantity3 * price3;
  const itemTotal4 = quantity4 * price4;

  // Sum all item totals.
  const overallTotal = itemTotal1 + itemTotal2 + itemTotal3 + itemTotal4;

  // Update the result div dynamically when user clicks the button.
  resultDiv.innerHTML = [
    `Total Cost: <strong>$${overallTotal.toFixed(2)}</strong>`,
    `${itemName1}: $${itemTotal1.toFixed(2)}`,
    `${itemName2}: $${itemTotal2.toFixed(2)}`,
    `${itemName3}: $${itemTotal3.toFixed(2)}`,
    `${itemName4}: $${itemTotal4.toFixed(2)}`,
  ].join("<br>");
}

calculateBtn.addEventListener("click", calculateTotalCost);
