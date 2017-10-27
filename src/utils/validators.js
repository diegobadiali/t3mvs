export function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


export function simpleValidation(target) {

  let isValid = true;

  if (target.required) {
    isValid = target.value.length > 0;
  }

  switch (target.type) {
    case 'email':
      isValid = validateEmail(target.value);
      break;

  }

  return isValid;
}