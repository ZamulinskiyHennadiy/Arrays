//Список покупок з повною характеристикою
const shoppingList = [
  { name: "Хліб", quantity: 1, bought: true, price: 32, total: 32 },
  { name: "Молоко", quantity: 2, bought: true, price: 49, total: 98 },
  { name: "Яблука", quantity: 5, bought: false, price: 30, total: 150 },
  { name: "Риба", quantity: 1, bought: false, price: 120, total: 120 },
  { name: "Яловичина", quantity: 2, bought: true, price: 160, total: 320 },
  { name: "Курка", quantity: 1, bought: false, price: 170, total: 170 },
  { name: "Картопля", quantity: 5, bought: true, price: 25, total: 125 }
];

// Виведення списку на екран з поділом на придбані/непридбані продукти
function displayShoppingList() {
  console.log("Не придбані:");
  shoppingList
    .filter(item => !item.bought)
    .forEach(item => console.log(`${item.name} - ${item.quantity} шт. (ціна за шт: ${item.price} грн, всього: ${item.total} грн)`));

  console.log("\nПридбані:");
  shoppingList
    .filter(item => item.bought)
    .forEach(item => console.log(`${item.name} - ${item.quantity} шт. (ціна за шт: ${item.price} грн, всього: ${item.total} грн)`));
}

displayShoppingList();

//Функція для покупки продукту
function buyProduct(productName) {
  const product = shoppingList.find(item => item.name === productName);
  
  if (product) {
    product.bought = true;
    console.log(`${productName} успішно придбано!`);
  } else {
    console.log(`${productName} не знайдено в списку.`);
  }
}

// Викликаємо функцію, наприклад, для покупки "Хліб":
buyProduct("Хліб");

// Знову виводимо список для перевірки
displayShoppingList();

//Видалення продукту зі списку.
function deleteProduct(productName) {
  const newList = shoppingList.filter(item => item.name !== productName);
  
  if (newList.length !== shoppingList.length) {
    console.log(`${productName} було видалено зі списку.`);
  } else {
    console.log(`${productName} не знайдено.`);
  }

  return newList;
}

// Використовуємо функцію для видалення продукту, наприклад, "Яловичина":
const updatedShoppingList = deleteProduct("Яловичина");



// Перевіряємо результат
displayShoppingList();

//Додавання покупки в список.
function addProduct(productName, quantity, price) {
  const product = shoppingList.find(item => item.name === productName);
  
  if (product) {
    // Якщо продукт вже є, збільшуємо кількість і оновлюємо суму
    product.quantity += quantity;
    product.total = product.quantity * product.price;
    console.log(`Оновлено ${productName}: тепер ${product.quantity} шт., загальна сума: ${product.total} грн.`);
  } else {
    // Якщо продукту немає, додаємо новий
    const newProduct = {
      name: productName,
      quantity: quantity,
      bought: false,
      price: price,
      total: quantity * price
    };
    shoppingList.push(newProduct);
    console.log(`Додано новий продукт: ${productName} - ${quantity} шт., ціна за шт: ${price} грн.`);
  }
}

// Додаємо новий продукт або оновлюємо існуючий, наприклад, "Яблука":
addProduct("Яблука", 2, 10);

// Додаємо новий продукт, наприклад, "Сир":
addProduct("Сир", 1, 50);

// Перевіряємо результат:
displayShoppingList();

//Підрахунок суми всіх продуктів
function calculateTotalSum() {
  const totalSum = shoppingList.reduce((sum, product) => sum + product.total, 0);
  console.log(`Загальна сума всіх продуктів: ${totalSum} грн.`);
  return totalSum;
}

// Виклик функції для підрахунку суми:
calculateTotalSum();

//Підрахунок суми придбаних і непридбаних продуктів
function calculateBoughtSum(isBought) {
  const filteredProducts = shoppingList.filter(product => product.bought === isBought);
  const totalSum = filteredProducts.reduce((sum, product) => sum + product.total, 0);
  
  if (isBought) {
    console.log(`Сума всіх придбаних продуктів: ${totalSum} грн.`);
  } else {
    console.log(`Сума всіх непридбаних продуктів: ${totalSum} грн.`);
  }
  
  return totalSum;
}

// Підрахунок суми для непридбаних продуктів:
calculateBoughtSum(false);

// Підрахунок суми для придбаних продуктів:
calculateBoughtSum(true);

//Сортування продуктів за сумою
function sortProductsByTotal(order = "asc") {
  const sortedProducts = [...shoppingList].sort((a, b) => {
    if (order === "asc") {
      return a.total - b.total;
    } else if (order === "desc") {
      return b.total - a.total;
    }
  });

  console.log(`Продукти відсортовані за сумою (${order === "asc" ? "від меншого до більшого" : "від більшого до меншого"}):`);
  sortedProducts.forEach(product => {
    console.log(`${product.name} - ${product.total} грн.`);
  });

  return sortedProducts;
}

// Сортування від меншого до більшого:
sortProductsByTotal("asc");

// Сортування від більшого до меншого:
sortProductsByTotal("desc");