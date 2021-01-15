const Till = require('./till.js')

describe('Till', () => {
  let orderDouble = {
    "_name": "Susan",
    "_items": [
      [
        "Cafe Latte",
        3,
        4.75
      ],
      [
        "Muffin Of The Day",
        2,
        4.55
      ]
    ],
  }
  let till = new Till(orderDouble);

  describe('Constructor', () => {

    test('Takes and order upon instantiation', () => {
      expect(till.getOrder()).toEqual(orderDouble)
    });

  });

  describe('_calculateItemTotal', () => {
  
    test('Calculates the total amount owed for multiple items', () => {
      till._calculateItemTotal();
      expect(till._order._items[0][3]).toEqual(14.25)
    });

    test('Calculates the total amount owed for multiple items', () => {
      till._calculateItemTotal();
      expect(till._order._items[1][3]).toEqual(9.1)
    });

  });

  describe('Order Total', () => {
  
    test('Calculates the subtotal amount for an order', () => {
      till._calculateSubtotal();
      expect(till._calculateSubtotal()).toEqual(23.35)
    });

    test('Calculates total tax of an order', () => {
      expect(till._totalTax(23.35)).toEqual(2.01744)
    });

    test('Calculates the grand total of an order', () => {
      expect(till.calculateGrandTotal()).toEqual(25.367440000000002)
    })

  });


});

