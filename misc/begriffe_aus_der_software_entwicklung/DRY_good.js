function calcDiscount(price, discount) {
    return price * (1 - discount);
}

const priceA = 100;
const discountA = 0.1; // 10 %
const discountedPriceA = calcDiscount(priceA, discountA);

const priceB = 200;
const discountB = 0.15; // 15 %
const discountedPriceB = calcDiscount(priceB, discountB);

const priceC = 300;
const discountC = 0.2; // 20 %
const discountedPriceC = calcDiscount(priceC, discountC);

console.log(discountedPriceA, discountedPriceB, discountedPriceC);
