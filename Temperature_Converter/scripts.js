const onInput = (degree, fromScale, toScale) => {

    const c2f = c => c * 9 / 5 + 32;
    const f2c = f => (f - 32) * 5 / 9;
    const k2c = k => k - 273.15;
    const c2k = c => c + 273.15;
    const f2k = f => c2k(f2c(f));
    const k2f = k => c2f(k2c(k));

    if (degree == "") { 
        return "Please enter a temperature to convert.";
    }
    
    switch (fromScale + " | " + toScale) {
        case "Celsius | Fahrenheit":
            return Math.round(c2f(+degree) * 100) / 100 + " Â°F";
            break; 
        case "Fahrenheit | Celsius":
            return Math.round(f2c(+degree) * 100) / 100 + " Â°C";
            break;
        case "Kelvin | Celsius":
            return Math.round(k2c(+degree) * 100) / 100 + " Â°C";
            break;
        case "Celsius | Kelvin":
            return Math.round(c2k(+degree) * 100) / 100 + " K";
            break;
        case "Fahrenheit | Kelvin":     
            return Math.round(f2k(+degree) * 100) / 100 + " K";
            break;
        case "Kelvin | Fahrenheit":
            return Math.round(k2f(+degree) * 100) / 100 + " Â°F";
            break;
        case "Celsius | Celsius":
            return Math.round(+degree * 100) / 100 + " Â°C";
            break;
        case "Fahrenheit | Fahrenheit":
            return Math.round(+degree * 100) / 100 + " Â°F";
            break;
        case "Kelvin | Kelvin":
            return Math.round(+degree * 100) / 100 + " K";
            break;
    }
};

const onlyNumbers = e => {
    if (isNaN(e.key) && 
        e.key !== "Backspace" && 
        e.key !== "." && 
        e.key !== "-") {
        e.preventDefault();
      }
};