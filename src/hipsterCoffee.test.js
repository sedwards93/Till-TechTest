const Order = require('./hipsterCoffee.js')

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
    })
  })

  

});