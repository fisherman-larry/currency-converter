let sumElement = document.querySelector(".js-sum");
let exchangeRateElement = document.querySelector(".js-exchangeRate");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let sum = sumElement.value;
    let exchangeRate = exchangeRateElement.value;

    let result = sum * exchangeRate;

    resultElement.innerText = result;

});



