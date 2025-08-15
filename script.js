function appendToDisplay(value) {
    // Añade el valor al campo de display
    document.getElementById('display').value += value;
}

function clearDisplay() {
    // Limpia el campo de display
    document.getElementById('display').value = '';
}

function calculateResult() {
    // Calcula el resultado de la expresión en el display
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error'; // Muestra un mensaje de error si la evaluación falla
    }
}