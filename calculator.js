let calculation = localStorage.getItem("keys") || "";

//This function adds the value to calculation in functional form and displays it on .cap-result-para, and saves the value in the localStorage.
function touch_Keys(value) {
  calculation += value;

  displayCalResult();

  localStorage.setItem("keys", calculation);
} //Function touch_Keys ends here.

//This function using DOM shoes the value of calculation at call.
function displayCalResult() {
  document.querySelector(".cal-result-para").innerHTML = calculation;
} //Function displayCalResult ends here.

displayCalResult();
