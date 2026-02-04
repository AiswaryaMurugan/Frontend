const buttons = document.querySelectorAll("button");
const cartText = document.querySelector(".cart b");
const totalText = document.querySelector(".amount b");
const rangeInput = document.getElementById("pricerange");
const productBoxes = document.querySelectorAll(".child > div");

const prices = [60000, 30000, 2000, 8000, 800, 40000];

let cartCount = 0;
let totalAmount = 0;

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        cartCount++;
        totalAmount += prices[index];

        cartText.innerText = `Cart  (${cartCount})`;
        totalText.innerText = `Total Amount: ₹${totalAmount}`;
    });
});


rangeInput.addEventListener("input", () => {
    const maxPrice = rangeInput.value;

    document.querySelector(".bold b").innerText = `Max Price: ₹${maxPrice}`;

    productBoxes.forEach((box, index) => {
        if (prices[index] <= maxPrice) {
            box.style.display = "inline-block";
        } else {
            box.style.display = "none";
        }
    });
});
