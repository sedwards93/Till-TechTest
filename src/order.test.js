const Order = require('./order.js')

describe('Order', () => {

  let order = new Order('Susan');

  describe('Constructor', () => {

    test('Has customer name property', () => {
      expect(order.getCustomerName()).toEqual('Susan')
    });
  
    test('Has customer items as property', () => {
      expect(order.getItems()).toEqual([])
    });

  });

  describe('Add', () => {

    test('Add throws an error when customer orders something not on the menu', () => {
      expect(() => order.add("Pickled eggs", 1).toThrow("Item not on the menu!"))
    });

    test('Adds item to the items property when item is on the menu', () => {
      order.add("Cafe Latte", 1);
      expect(order.getItems()).toEqual([["Cafe Latte", 1, 4.75, 4.75, 0.41040000000000004]])
    })

  })

  describe('orderTotal', () => {

    test('Calculates the total amount owed on an order with tax', () => {
      order.add("Cafe Latte", 3);
      order.add("Muffin Of The Day", 2)
      expect(order.orderTotal()).toEqual(29.313919999999996)
    });

  });

});