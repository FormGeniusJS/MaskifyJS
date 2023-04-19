function applyMask(input, mask) {
  let maskedValue = '';
  let inputIndex = 0;
  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === '#') {
      maskedValue += input.value[inputIndex] || '';
      inputIndex++;
    } else {
      maskedValue += mask[i];
    }
  }
  input.value = maskedValue;
}

function addMaskedInput(field, mask) {
  field.addEventListener('input', (event) => {
    applyMask(event.target, mask);
  });
}

function addMaskedPhoneInput(field) {
  const phoneMask = '(###) ###-####';
  addMaskedInput(field, phoneMask);
}

function addMaskedDateInput(field) {
  const dateMask = '##/##/####';
  addMaskedInput(field, dateMask);
}

function addMaskedCurrencyInput(field) {
  const currencyMask = '$###,###,###.##';
  addMaskedInput(field, currencyMask);
}

function addDynamicMaskedInput(field, maskGenerator) {
  field.addEventListener('input', (event) => {
    const mask = maskGenerator(event.target.value);
    applyMask(event.target, mask);
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