
function validateForm() {
  let x = document.forms["myForm"]["lname"].value;
  if (x == "") {
    alert("Last name must be filled out");
    return false;
  }
  let y = document.forms["myForm"]["email"].value;
  if (y == "") {
    alert("Email address must be filled out");
    return false;
  }
}