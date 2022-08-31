const inputContainer = document.querySelector('.color-container');
const colorText = document.querySelector('.color-input');
const colorPicker = document.querySelector('.color-picker');
const colorBtn = document.querySelector('.color-btn');


colorBtn.addEventListener('click', () => {
    colorPicker.click();
    colorPicker.focus();
    colorPicker.addEventListener('change', () => {
            colorText.value = colorPicker.value;
            colorBtn.style.backgroundColor = colorPicker.value;
            inputContainer.style.borderColor = colorPicker.value;
        })
})

colorText.addEventListener('input', () => {
    colorPicker.value = colorText.value;
    colorBtn.style.backgroundColor = colorPicker.value;
    inputContainer.style.borderColor = colorPicker.value;
})