const Pokemon = require("../pokemon.js");

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
    test("returns false if pokemon is normal type", () => {
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
