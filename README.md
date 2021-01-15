# Till Tech Test

We want to sell tills to a local hipster coffee shop who are finally embracing the 21st century. We need a new till to replace their vintage machines - unfortunately, hipster staff are too cool to learn a new system, so we need you to build something that they will understand.

## [](https://github.com/makersacademy/course/blob/master/individual_challenges/till_tech_test.md#specification)Specification

This is what a sample receipt looks like:

![receipt](./public/receipt.jpg)

## [](https://github.com/makersacademy/course/blob/master/individual_challenges/till_tech_test.md#version-1)Version 1

Implement a system that contains the business logic to produce receipts similar to this, based on a  `json`  price list and test orders. A sample  `.json`  [file](https://github.com/makersacademy/course/blob/master/individual_challenges/hipstercoffee.json)  has been provided with the list of products sold at this particular coffee shop.

Here are some sample orders you can try - whether you use this information is up to you:

> **Jane**  
> 2 x Cafe Latte  
> 1 x Blueberry Muffin  
> 1 x Choc Mudcake
> 
> **John**  
> 4 x Americano  
> 2 x Tiramisu  
> 5 x Blueberry Muffin

Your receipt must calculate and show the correct amount of tax (in this shop's case, 8.64%), as well as correct line totals and total amount. Do not worry about calculating discounts or change yet. Consider what output formats may be suitable.

## [](https://github.com/makersacademy/course/blob/master/individual_challenges/till_tech_test.md#version-2)Version 2

-   Add functionality to take payment and calculate correct change.
-   Add functionality to handle discounts - in this example, a 5% discount on orders over $50, and a 10% muffin discount.

## [](https://github.com/makersacademy/course/blob/master/individual_challenges/till_tech_test.md#version-3)Version 3

Implement a user interface that can actually be used as a till.

You may use whatever technologies you see fit.