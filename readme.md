# MaskifyJS

MaskifyJS is a lightweight JavaScript library for adding input masks to HTML form fields.

## Installation

You can include the MaskifyJS library in your project using either a CDN or by downloading and including the library file in your project.

### CDN

```html
<script src="https://unpkg.com/maskifyjs/dist/maskifyjs.min.js"></script>
```

### Download
Download the latest release from the GitHub repository and include it in your project:

```html
<script src="/path/to/maskifyjs.min.js"></script>
```

### Usage
To use the MaskifyJS library, you need to add a data attribute to the input field you want to apply the mask to and call the corresponding function for the mask type you want to apply.

### Phone Number Mask
To apply a phone number mask to an input field, add the data-maskify-phone attribute to the input element and call the MaskifyJS.addMaskedPhoneInput function, passing in the input element as an argument.

```HTML
<input type="tel" data-maskify-phone>
<script>
  const phoneField = document.querySelector('[data-maskify-phone]');
  MaskifyJS.addMaskedPhoneInput(phoneField);
</script>
```

### Date Mask
To apply a date mask to an input field, add the data-maskify-date attribute to the input element and call the MaskifyJS.addMaskedDateInput function, passing in the input element as an argument.

```html
<input type="text" data-maskify-date>
<script>
  const dateField = document.querySelector('[data-maskify-date]');
  MaskifyJS.addMaskedDateInput(dateField);
</script>
```

### Currency Mask

To apply a currency mask to an input field, add the data-maskify-currency attribute to the input element and call the MaskifyJS.addMaskedCurrencyInput function, passing in the input element as an argument.

```HTML
<input type="text" data-maskify-currency>
<script>
  const currencyField = document.querySelector('[data-maskify-currency]');
  MaskifyJS.addMaskedCurrencyInput(currencyField);
</script>
```

### Dynamic Mask Generation
To generate a mask dynamically based on the input value, add the data-maskify-dynamic attribute to the input element and call the MaskifyJS.addDynamicMaskedInput function, passing in the input element and a mask generator function as arguments.

```html
<input type="text" data-maskify-dynamic>
<script>
  const dynamicField = document.querySelector('[data-maskify-dynamic]');
  const maskGenerator = function(inputValue) {
    // Generate the mask string based on the input value
    // ...
    return maskString;
  };
  MaskifyJS.addDynamicMaskedInput(dynamicField, maskGenerator);
</script>
```

### Downloading the Library
You can download the MaskifyJS library by cloning the GitHub repository or by downloading the latest release.