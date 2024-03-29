# Classes

In this activity, we will use classes to make two RPG characters match against each other.

## Instructions

* Open [character.js](starter/character.js) and update the `Character` class. It should instantiate an object with the following properties:

  * Name
  * Strength
  * hitPoints

* Create a `printStats()` class method that prints the name, strength, and hitPoints for a character.

* Create an `attack(opponent)` method that a character can use to deal damage (equal to their strength) to their opponent's hitPoints.  

* Create two instances of a character, giving them different names, strength, and hitPoints. 

* Using `setInterval`, make each character take turns attacking each other. 

* `printStats()` after each attack to visualize the battle.

* Use an `isAlive` method to check if each character has more than 0 hitPoints every turn. If either character has been defeated, stop the interval and end the game.

### BONUS

* Add validation to ensure that each character is provided the proper three arguments when created. If any of the arguments are not present, `throw` an error.

### Hints

* Before trying to make the characters take turns, try making one character attack another until the game is over.

---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
