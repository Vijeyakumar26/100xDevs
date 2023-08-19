/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
var transactions = [
 { itemName : 'Mouse',  category : 'Electronics',  price : 800, timestamp :  Date.now()},
 { itemName : 'Keyboard',  category : 'Electronics',  price : 10000, timestamp :  Date.now()},
 { itemName : 'Pencil',  category : 'Stationary',  price : 800, timestamp :  Date.now()},
 { itemName : 'Pen', category : 'Stationary', price : 2000, timestamp :  Date.now()},
 { itemName : 'Bread', category : 'Food', price : 6000, timestamp :  Date.now()},
 { itemName : 'Tomato', category : 'Vegetables', price : 5600, timestamp :  Date.now()}
];


function calculateTotalSpentByCategory(transactions) {
  var categoryList = [];
  for(var i = 0; i<transactions.length; i++){
      categoryList.push(transactions[i].category,transactions[i].price);
  }
  return categoryList;
}
console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;
