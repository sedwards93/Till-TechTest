

const coffeeShopJson = {
    "shopName": "The Coffee Connection",
    "address": "123 Lakeside Way",
    "phone": "16503600708",
    "prices": [
      {
        "Cafe Latte": 4.75,
        "Flat White": 4.75,
        "Cappucino": 3.85,
        "Single Espresso": 2.05,
        "Double Espresso": 3.75,
        "Americano": 3.75,
        "Cortado": 4.55,
        "Tea": 3.65,
        "Choc Mudcake": 6.40,
        "Choc Mousse": 8.20,
        "Affogato": 14.80,
        "Tiramisu": 11.40,
        "Blueberry Muffin": 4.05,
        "Chocolate Chip Muffin": 4.05,
        "Muffin Of The Day": 4.55
      }
    ]
  }

class Order {
  constructor(name) {
    this._name = name;
    this._items = [];
    this._TAX = 0.0864;
  }

  getCustomerName() {
    return this._name;
  }

  getItems() {
    return this._items;
  }

  add(item, quantity) {
    if (coffeeShopJson.prices[0][item] === undefined) {
      throw Error('Item not on the menu!')
    } else {
      let price = coffeeShopJson.prices[0][item];
      this._items.push([item, quantity, price, this._totalPrice(price, quantity), this._tax(price)])
    } 
  }

  orderTotal() {
    var sum = 0;
    for (var i = 0; i < (this._items).length; i++) {
      sum += this._items[i][3] + this._items[i][4];
    }
    return sum;;
  }

  _totalPrice(price, quantity) {
    return price * quantity;
  }

  _tax(price) {
    return price * this._TAX;
   
  }

}


module.exports = Order;