function applyMask(input, mask, errorMessage) {
  let maskedValue = '';
  let inputIndex = 0;
  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === '#') {
      if (input.value[inputIndex]) {
        maskedValue += input.value[inputIndex];
        inputIndex++;
      } else {
        input.setCustomValidity(errorMessage);
        input.reportValidity();
        return;
      }
    } else {
      maskedValue += mask[i];
    }
  }
  input.value = maskedValue;
  input.setCustomValidity('');
}

function addMaskedInput(field, mask, errorMessage) {
  field.addEventListener('input', (event) => {
    applyMask(event.target, mask, errorMessage);
  });
}

function addMaskedPhoneInput(field, errorMessage) {
  const phoneMask = '(###) ###-####';
  addMaskedInput(field, phoneMask, errorMessage);
}

function addMaskedDateInput(field, errorMessage) {
  const dateMask = '##/##/####';
  addMaskedInput(field, dateMask, errorMessage);
}

function addMaskedCurrencyInput(field, errorMessage) {
  const currencyMask = '$###,###,###.##';
  addMaskedInput(field, currencyMask, errorMessage);
}

function addDynamicMaskedInput(field, maskGenerator, errorMessage) {
  field.addEventListener('input', (event) => {
    const mask = maskGenerator(event.target.value);
    applyMask(event.target, mask, errorMessage);
  });
}

function generatePhoneMask(inputValue) {
  // Generate the phone number mask based on the country code of the input value
  const countryCode = inputValue.slice(0, 1);
  switch (countryCode) {
    case '1':
      return '(###) ###-####';
    case '2':
      return '+## (###) ###-####';
    // Add additional country codes and mask formats as needed
    default:
      return '(###) ###-####';
  }
}

function generateDateMask(inputValue) {
  // Generate the date mask based on the length of the input value
  if (inputValue.length <= 5) {
    return '##/##';
  } else {
    return '##/##/####';
  }
}

function generateCurrencyMask(inputValue) {
  // Generate the currency mask based on the value of the input
  if (inputValue.startsWith('$')) {
    return '$###,###,###.##';
  } else {
    return '###,###,###.##$';
  }
}
