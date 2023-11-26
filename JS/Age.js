var Element = document.getElementById("Age");
const date = new Date();
const CurrentYear = date.getFullYear();
const Birthday = 2004;

Element.innerHTML = CurrentYear - Birthday;