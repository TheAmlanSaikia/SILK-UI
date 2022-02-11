const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");


function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("error-class");
  const smalltext = formControl.querySelector('small');
  
  smalltext.innerHTML=message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add("success-class");
}

function checkEmail(input) {
  const regexvalue =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regexvalue.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

function checkRequired(inputArr) {
  inputArr.forEach((element) => {
    if (element.value.trim() === "") {
      showError(element, `${getFieldName(element)} is required`);
    } else {
      showSuccess(element);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

function checkPaswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, `Password do not match`);
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  checkRequired([username, email, password1, password2]);
  checkLength(username, 3, 15);
  checkLength(password1, 6, 25);
  checkEmail(email);
  checkPaswordMatch(password1, password2);
});
