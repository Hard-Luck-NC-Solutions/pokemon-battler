const {
  Pokemon,
  Water,
  Fire,
  Grass,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
} = require("../pokemon.js");

describe("Pokemon Class", () => {
  describe("properties", () => {
    test("Test object is created", () => {
      const pikachu = new Pokemon();
      expect(typeof pikachu).toBe("object");
    });
    test("Test the name is name passed", () => {
      const pikachu = new Pokemon("Pikachu");
      expect(pikachu.name).toBe("Pikachu");
    });
    test("Test type defaults to normal", () => {
      const pikachu = new Pokemon("Pikachu");
      expect(pikachu.type).toBe("normal");
    });
    test("Test thu.hitPoints aru.hitPoints given", () => {
      const pikachu = new Pokemon("Pikachu", 100);
      expect(pikachu.hitPoints).toBe(100);
    });
    test("Test the attacking damage is number given", () => {
      const pikachu = new Pokemon("Pikachu", 100, 30);
      expect(pikachu.attackingDamage).toBe(30);
    });
    test("Test move defaults to tackle", () => {
      const pikachu = new Pokemon("Pikachu", 100, 30);
      expect(pikachu.move).toBe("tackle");
    });
  });
  describe("methods", () => {
    test("isEffectiveAgains returns false if pokemon is normal type", () => {
      const pikachu = new Pokemon("Pikachu", 100, 30);
      const squirtle = new Pokemon("Squirtle", 100, 30);
      expect(pikachu.isEffectiveAgainst(squirtle)).toBe(false);
    });
    test("isWeakTo return a boolean if pokemon is weak to given pokemon", () => {
      const pikachu = new Pokemon("Pikachu", 100, 30);
      const squirtle = new Pokemon("Squirtle", 100, 30);
      expect(pikachu.isWeakTo(squirtle)).toBe(false);
    });
    test("takeDamage reduces health by given number", () => {
      const pikachu = new Pokemon("Pikachu", 100, 30);
      pikachu.takeDamage(20);
      expect(pikachu.hitPoints).toBe(80);
    });
    test("useMove returns pokemon attack damage", () => {
      const pikachu = new Pokemon("Pikachu", 100, 30);
      expect(pikachu.useMove()).toBe(30);
    });
    test("hasFainted returns true is pokemon hitpoints = 0 ", () => {
      const pikachu = new Pokemon("Pikachu", 100, 30);
      pikachu.takeDamage(50);
      expect(pikachu.hasFainted()).toBe(false);
      pikachu.takeDamage(50);
      expect(pikachu.hasFainted()).toBe(true);
    });
  });
});
describe("type classes", () => {
  const charmander = new Fire("charmander", 100, 50);
  const bulbasaur = new Grass("Bulbasaur", 100, 30);
  const squirtle = new Water("Squirtle", 100, 30);
  describe("Fire class", () => {
    test("isEffectiveAgainst returns true if type is grass else false", () => {
      expect(charmander.isEffectiveAgainst(bulbasaur)).toBe(true);
      expect(charmander.isEffectiveAgainst(squirtle)).toBe(false);
    });
    test("isWeakTo returns true if type is water else false", () => {
      expect(charmander.isWeakTo(squirtle)).toBe(true);
      expect(charmander.isWeakTo(bulbasaur)).toBe(false);
    });
  });
  describe("Water class", () => {
    test("isEffectiveAgainst returns true if type is grass else false", () => {
      expect(squirtle.isEffectiveAgainst(charmander)).toBe(true);
      expect(squirtle.isEffectiveAgainst(bulbasaur)).toBe(false);
    });
    test("isWeakTo returns true if type is water else false", () => {
      expect(squirtle.isWeakTo(bulbasaur)).toBe(true);
      expect(squirtle.isWeakTo(charmander)).toBe(false);
    });
  });
  describe("Grass class", () => {
    test("isEffectiveAgainst returns true if type is grass else false", () => {
      expect(bulbasaur.isEffectiveAgainst(squirtle)).toBe(true);
      expect(bulbasaur.isEffectiveAgainst(charmander)).toBe(false);
    });
    test("isWeakTo returns true if type is water else false", () => {
      expect(bulbasaur.isWeakTo(charmander)).toBe(true);
      expect(bulbasaur.isWeakTo(squirtle)).toBe(false);
    });
  });
  describe("Charmander", () => {
    test("charmanders move is ember", () => {
      const charmander1 = new Charmander("Charmander", 100, 30);
      expect(charmander1.move).toBe("ember");
    });
  });
  describe("Squirtle", () => {
    test("squirtles move is water gun", () => {
      const squirtle1 = new Squirtle("Squirtle", 100, 30);
      expect(squirtle1.move).toBe("water gun");
    });
  });
  describe("Bulbasaur", () => {
    test("bulbasaurs move is vine whip", () => {
      const bulbasaur1 = new Bulbasaur("Bulbasaur", 100, 30);
      expect(bulbasaur1.move).toBe("vine whip");
    });
  });
  describe("Rattata", () => {
    test("Rattatas returnd as an object", () => {
      const rattata1 = new Rattata("Rattata", 100, 30);
      expect(typeof rattata1).toEqual("object");
    });
  });
});
/*
 
Methods
throw

can take a Pokemon as an argument. If the pokeball is empty it will capture the passed pokemon. If it isn't empty the user should not be allowed to capture a pokemon with it! The throw method should also console log something like ("you caught pokemonX's name")
Additionally the method can be invoked with no argument. In this case the method should return the stored Pokemon (ready for battle). The throw method should console log something like ("GO pokemonX's name!!") in this scenario. If the ball is empty then the user should be informed.
isEmpty

should return a Boolean representing whether or not a Pokemon is stored inside it
contains

should return the name of the Pokemon that is stored,
if the Pokeball is empty is should return "empty ..."


 */
