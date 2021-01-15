'use strict';

class Till {
  constructor(_order = Order) {
    this._order = _order;
    this._TAX = 0.0864;
  }
  getOrder() {
    return this._order;
  }

  _calculateSubtotal() {
    let sum = 0;
    for (var i = 0; i < (this._order._items).length; i++) {
      sum += this._order._items[i][3];
    }
    return sum;
  }

  calculateGrandTotal() {
    this._calculateItemTotal();
    let subtotal = this._calculateSubtotal();
    let totalTax = this._totalTax(subtotal);
    return subtotal + totalTax;
  }

  _calculateItemTotal() {
    for (var i = 0; i < (this._order._items).length; i++) {
      let quantity = this._order._items[i][1];
      let price = this._order._items[i][2];
      this._order._items[i][3] = quantity * price;
    };
  };

  _totalTax(amount) {
    return amount * this._TAX;
  };


  };
  

module.exports = Till;