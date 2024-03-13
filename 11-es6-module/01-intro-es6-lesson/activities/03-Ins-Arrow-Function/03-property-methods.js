// Avoid using arrow functions for object methods
var dog = {
  name: "Lassie",
  sound: "Woof!",
  makeSound: () => console.log(this.sound),
  readTag: () => console.log("The dog's tag reads: " + this.name + ".")
};

// Prints `undefined`
dog.makeSound();

// Prints `The dog's tag reads: undefined.`
dog.readTag();

// In the makeSound and readTag methods, `this` doesn't refer to `dog`
// If this code was run in Node.js, `this` refers to the global object in this file, which contains all the top level variables/functions.
// If this code was run in the browser, `this` would refer to the window
