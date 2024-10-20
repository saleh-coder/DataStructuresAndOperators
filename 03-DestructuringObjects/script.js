'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // PRACTICAL APPLICATION OF DESTRUCTURING

  // Creates a method for order delivery.
  // Using destructuring, we can simplify parameter handling by passing an object to the function,
  // making it clear and reducing confusion over parameter order.
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '22:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${address} at ${time}`
    ); // Example: Order received! Garlic Bread and Risotto will be delivered at Via del Sole, 21 at 22:30
  },
};

// Call the orderDelivery function with an object of options.
restaurant.orderDelivery({
  starterIndex: 2,
  mainIndex: 2,
  address: 'Via del Sole, 21',
  time: '22:30',
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

//-----------------------------------------------------

// OBJECT DESTRUCTURING
const { name, openingHours, categories } = restaurant; // To destructure objects we use the curly braces. This is also  how we create objects. Then all we have to do now is to provide the varible names that exactly match the property names that we want to retrieve from object.
console.log(name, openingHours, categories);

//----------------------------------------------------
// RENAMING VARIABLES

// Now, what if we wanted the variable names to be different from the property names?
// WE still need to reference the property names like we did above, otherwisw JavaScript has no way of knowing what we actually want. Then we can use the colon (:) and specify a new name.
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// This allows us to use more descriptive names or avoid naming conflicts, improving code clarity while still accessing the original properties.
console.log(restaurantName, hours, tags);

//-----------------------------------------------------
// SETTING DEFAULT VALUES FOR MISSING PROPERTIES

// Another useful feature when dealing with third-party data, such as that obtained from an API call, is the ability to set default values for properties that may not exist on the object. If a property is missing, like restaurant.menu, it will return undefined since this property does not exist—only starterMenu and mainMenu do.

console.log(restaurant.menu); // undefined

// We can set default values during object destructuring. For example, you can define a default value for menu and give starterMenu another name, such as starters, while also setting its default value to an empty array. This way, if menu is accessed but doesn't exist, it will default to the empty array, preventing undefined values.
const { menu = [], starterMenu: starters = [] } = restaurant; // > [] > (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
// The (non-existent) menu returns an empty array instead of undefined, and starterMenu is renamed.
console.log(menu, starters);

// This technique is particularly helpful when working with real-world data, which may not always be consistent or known in advance. Setting default values allows for safer and more robust code.

//-----------------------------------------------------
// MUTATING VARIABLES WHILE DESTRUCTURING OBJECTS

let a = 111; // Initial variable
let b = 999; // Initial variable
const obj = { a: 23, b: 7, c: 14 }; // Object with properties and their values

// Destructuring with variable mutation
({ a, b } = obj); // Use parentheses to allow assignment to existing variables
console.log(a, b); // Outputs: 23, 7

//EXPLANATION OF THE IMPORTANCE OF USING PARENTHESES

// In JavaScript, when you use destructuring assignment, wrapping the destructuring expression in parentheses is necessary if you want to assign the values directly to existing variables. This is because the JavaScript engine interprets curly braces {} as the start of a block statement, not as an object. By using parentheses, you explicitly tell the engine that you are performing an assignment, allowing the destructuring to take place correctly. Without parentheses, you would encounter a syntax error.

//-----------------------------------------------------

// NESTED OBJECTS
// We're gonna start with opening hours, and now we want to retrieve Friday.
const { fri } = openingHours;
console.log(fri); // {open: 11, close: 23}

// Now we wnat one called open and the other one called close, and this is how it works. We can further destructure that object using this syntax
const {
  fri: { open, close },
} = openingHours;
console.log(open, close); // 11 23

// We can take this further and assign different variables to these, using the colon (:) again.
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 11 23

//-----------------------------------------------------
