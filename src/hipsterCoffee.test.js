const Order = require('./hipsterCoffee.js')

describe('Order Class', () => {

  beforeEach(() => {
    order = new Order('Susan')
  });

  test('Has customer name property', () => {
    expect(order.getCustomerName().toEqual('Susan'))
  });
});