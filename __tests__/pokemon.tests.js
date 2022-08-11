const Pokemon = require("../pokemon.js");

describe("Pokemon Class", () => {
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
  test("Test the hitpoints are hitpoints given", () => {
    const pikachu = new Pokemon("Pikachu", 100);
    expect(pikachu.hitpoints).toBe(100);
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
