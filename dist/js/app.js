const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-input error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Check if email is valid
function checkEmail(input){
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value.trim())){

    // showSuccess(input);
  } else {
    showError(input, 'Email is not valid')
  }
}

// Check password match
// function checkPasswordsMatch(input1, input2) {
//   if(input1.value !== input2.value){
//     showError(input2, 'Passwords do not match');
//   }
// }

// Show success outline
// function showSuccess(input) {
//   const formControl = input.parentElement;
//   formControl.className = 'form-control success';
// }

// Check Required Fields
function checkRequired(inputArr){
  inputArr.forEach(function(input){
    if(input.value.trim() === ''){
      showError(input, `${getFieldName(input)} is required`);
    }
  });
}

// Check input lengths
// function checkLength(input, min, max) {
//   if(input.value.length < min ) {
//     showError(input, `${getFieldName(input)} must be at least ${min} characters`);
//   } else if (input.value.length > max){
//     showError(input, `${getFieldName(input)} must be less than ${max} characters`);
//   } else {
//     showSuccess(input);
//   }
// }

// Get Field Name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



// Event Listeners 
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  checkRequired([firstName, lastName, email, password]);
  checkEmail(email);
})