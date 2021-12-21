{
    const welcome = () => {
        console.log("Welcome developer on my currency converter site!! :)")
    };

    const calculateResult = (amount, currency) => {
        const rateEUR = 4.62;
        const rateGBP = 5.40;
        const rateUSD = 4.09;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "GBP":
                return amount / rateGBP;

            case "USD":
                return amount / rateUSD;
        }
    };
    
    const init = () => {
        welcome();

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const amountElement = document.querySelector(".js-amount");
            const currencyElement = document.querySelector(".js-currency");
            const resultElement = document.querySelector(".js-result");

            const amount = +amountElement.value;
            const currency = currencyElement.value;

            const result = calculateResult(amount, currency);

            resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency} </strong>`;
        });
    };
    init();
}