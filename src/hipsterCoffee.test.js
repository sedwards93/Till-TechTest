const Order = require('./hipsterCoffee.js')

describe('Order', () => {
  let order = new Order('Susan');
  test('Has customer name property', () => {
    expect(order.getCustomerName()).toEqual('Susan')
  });
  test('Has customer items as property', () => {
    expect(order.getItems()).toEqual([])
  });
});