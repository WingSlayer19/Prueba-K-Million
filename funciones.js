function priceFormattingFunction() {
    const documentTag = document.getElementById("precio");
    let element = documentTag.value; 
    if (!isNaN(+element)) {
        let parsedValue = parseFloat(element.replace(/,/g, ""))
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        element = `Q. ${parsedValue}`;
    } else {
        element="Dato invalido";

    }
    documentTag.value = element.replace(/,/g, "");
}

function getImageUrl() {
   
}

