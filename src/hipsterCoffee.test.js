const Order = require('./hipsterCoffee.js')

describe('Order', () => {
  test('Has customer name property', () => {
    let order = new Order('Susan');
    expect(order.getCustomerName()).toEqual('Susan')
  });
});