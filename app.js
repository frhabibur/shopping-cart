function getPrice(isIncrisign, id, price) {

    const productQuantityInput = document.getElementById(id + '-quantity');
    const producPrice = document.getElementById(id + '-price');
    const producPriceNumber = parseInt(producPrice.innerText);
    const phoneQuantity = parseInt(productQuantityInput.value);
    if (isIncrisign == true) {
        productQuantityInput.value = phoneQuantity + 1;


    }
    else if (phoneQuantity > 1) {
        productQuantityInput.value = phoneQuantity - 1;
    }
    // update product price 
    producPrice.innerText = productQuantityInput.value * price
    const phoneTotal = parseInt(document.getElementById('phone-price').innerText)
    const caseTotal = parseInt(document.getElementById('case-price').innerText);
    const subTotal = phoneTotal + caseTotal;
    // update sub total 
    document.getElementById('sub-total').innerText = subTotal
    // update tax 
    document.getElementById('tax').innerText = Math.round(subTotal / 10)
    // update total 
    document.getElementById('total').innerText = Math.round(subTotal + (subTotal / 10))
}

document.getElementById('phone-plus').addEventListener('click', function () {
    getPrice(true, 'phone', 1219)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    getPrice(false, 'phone', 1219)
})
document.getElementById('case-plus').addEventListener('click', function () {
    getPrice(true, 'case', 59)
})
document.getElementById('case-minus').addEventListener('click', function () {
    getPrice(false, 'case', 59)
})
