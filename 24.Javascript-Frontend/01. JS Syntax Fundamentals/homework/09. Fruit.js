function solve(fruit,weightGrams,priceKg) {

    const weightKg = weightGrams/1000;
    let money = weightKg * priceKg;

    console.log(`I need $${money.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}
solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)