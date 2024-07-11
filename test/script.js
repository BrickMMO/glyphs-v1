window.onload = function(){
    const icon = document.getElementById('icon-popup');
    const colorBoxes = document.querySelectorAll('.color-box');
    const colorPicker = document.getElementById('colorPicker');
    const resetBox = document.getElementById('resetBox');

    const originalColor = '#000000'; // Color original del icono

    // Función para convertir un color nombrado a hexadecimal
    function colorNameToHex(color) {
        const dummyDiv = document.createElement('div');
        dummyDiv.style.color = color;
        document.body.appendChild(dummyDiv);
        const computedColor = window.getComputedStyle(dummyDiv).color;
        document.body.removeChild(dummyDiv);

        const rgb = computedColor.match(/\d+/g);
        return rgbToHex(parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]));
    }

    function rgbToHex(r, g, b) {
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    }

    colorBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const newColor = box.getAttribute('data-color');
            const hexColor = colorNameToHex(newColor);
            icon.style.color = hexColor;
            colorPicker.value = hexColor;
        });
    });

    colorPicker.addEventListener('input', () => {
        const newColor = colorPicker.value;
        icon.style.color = newColor;
    });

    resetBox.addEventListener('click', () => {
        icon.style.color = originalColor;
        colorPicker.value = originalColor;
    });
};
