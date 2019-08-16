/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
// function GameObject (attributes) {
//     this.createdAt = attributes.createdAt;
//     this.name = attributes.name;
//     this.dimensions = attributes.dimensions;
//     // this.destroy = function () {
//     //   return `${this.name} was removed from the game.`;
//     // }
//   };
  
//   GameObject.prototype.destroy = function () {
//     return `${this.name} was removed from the game.`;
//   }
  
class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}


  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
//   function CharacterStats (characterAttributes) {
//     GameObject.call(this, characterAttributes);
//     this.healthPoints = characterAttributes.healthPoints;
//     // this.takeDamage = function () {
//     //   return `${this.name} took damage.`;
//     // }
//   };
  
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function () {
//     return `${this.name} took damage.`;
//   }
  

class CharacterStats extends GameObject {
    constructor(characterAttributes) {
        super(characterAttributes)
        this.healthPoints = characterAttributes.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
   
//   function Humanoid (humanoidAttributes) {
//     CharacterStats.call(this, humanoidAttributes);
//     this.team = humanoidAttributes.team;
//     this.weapons = humanoidAttributes.weapons;
//     this.language = humanoidAttributes.language;
//     // this.greet = function () {
//     //   return `${this.name} offers a greeting in ${this.language}.'`
//     // }
//   };
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function () {
//     return `${this.name} offers a greeting in ${this.language}.`;
//   }

class Humanoid extends CharacterStats {
    constructor(humanoidAttributes) {
        super(humanoidAttributes);
        this.team = humanoidAttributes.team;
        this.weapons = humanoidAttributes.weapons;
        this.language = humanoidAttributes.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}
  
//   function Hero (heroAttributes) {
//     Humanoid.call(this, heroAttributes);
//   };
  
//   Hero.prototype = Object.create(Humanoid.prototype);
  
//   Hero.prototype.heroAttack = function () {
//     let heroAttackValue = 10;
//     if (heroAttackValue - Bowser.healthPoints >= 0){
//       console.log(Bowser.destroy());
//     } else {
//       console.log(`${Bowser.healthPoints - villanAttackValue} / ${Bowser.healthPoints} health`);
//     }
//   }

class Hero extends Humanoid {
    constructor(heroAttributes) {
        super(heroAttributes);
      }
    heroAttack = function () {
        let heroAttackValue = 10;
        if (heroAttackValue - Bowser.healthPoints >= 0){
          console.log(Bowser.destroy());
        } else {
          console.log(`${Bowser.healthPoints - heroAttackValue} / ${Bowser.healthPoints} Bowser health`);
        }
    }
}

class Villan extends Humanoid {
    constructor (villanAttributes) {
        super(villanAttributes);
      }
    villanAttack = function () {
        let villanAttackValue = 10;
        if (villanAttackValue - Mario.healthPoints >= 0){
          console.log(Mario.destroy());
        } else {
          console.log(`${Mario.healthPoints - villanAttackValue} / ${Mario.healthPoints} Mario health`);
        }
    }
}
  
//   function Villan (villanAttributes) {
//     Humanoid.call(this, villanAttributes);
//   };
  
//   Villan.prototype = Object.create(Humanoid.prototype);
  
//   Villan.prototype.villanAttack = function () {
//     let villanAttackValue = 10;
//     if (villanAttackValue - Mario.healthPoints >= 0){
//       console.log(Mario.destroy());
//     } else {
//       console.log(`${Mario.healthPoints - villanAttackValue} / ${Mario.healthPoints} health`);
//     }
//   }
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    // const mage = new Humanoid({
    //   createdAt: new Date(),
    //   dimensions: {
    //     length: 2,
    //     width: 1,
    //     height: 1,
    //   },
    //   healthPoints: 5,
    //   name: 'Bruce',
    //   team: 'Mage Guild',
    //   weapons: [
    //     'Staff of Shamalama',
    //   ],
    //   language: 'Common Tongue',
    // });
  
    // const swordsman = new Humanoid({
    //   createdAt: new Date(),
    //   dimensions: {
    //     length: 2,
    //     width: 2,
    //     height: 2,
    //   },
    //   healthPoints: 15,
    //   name: 'Sir Mustachio',
    //   team: 'The Round Table',
    //   weapons: [
    //     'Giant Sword',
    //     'Shield',
    //   ],
    //   language: 'Common Tongue',
    // });
  
    // const archer = new Humanoid({
    //   createdAt: new Date(),
    //   dimensions: {
    //     length: 1,
    //     width: 2,
    //     height: 4,
    //   },
    //   healthPoints: 10,
    //   name: 'Lilith',
    //   team: 'Forest Kingdom',
    //   weapons: [
    //     'Bow',
    //     'Dagger',
    //   ],
    //   language: 'Elvish',
    // });
  
    // console.log(mage.createdAt); // Today's date
    // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    // console.log(swordsman.healthPoints); // 15
    // console.log(mage.name); // Bruce
    // console.log(swordsman.team); // The Round Table
    // console.log(mage.weapons); // Staff of Shamalama
    // console.log(archer.language); // Elvish
    // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    // console.log(mage.takeDamage()); // Bruce took damage.
    // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    const Bowser = new Villan({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 30,
      name: 'Bowser',
      team: 'Koopas',
      weapons: [
        'Shell',
        'Dagger',
      ],
      language: 'Crocodilish',
    });
  
    const Mario = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 20,
      name: 'Mario',
      team: 'Peach',
      weapons: [
        'Green-shell',
        'Mushroom',
      ],
      language: 'Italian',
    });
  
    Mario.heroAttack();
    Bowser.villanAttack();