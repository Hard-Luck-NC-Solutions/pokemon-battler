const { Pokeball, Battle, Trainer } = require("../pokemon-actions.js");
const { Charmander } = require("../pokemon.js");

describe("Pokeball", () => {
  test("pokeball has storage", () => {
    const pokeball = new Pokeball();
    expect(pokeball.hasOwnProperty("storage")).toBe(true);
  });

  test("isEmpty returns true if is Pokeball is empty", () => {
    const pokeball = new Pokeball();
    expect(pokeball.isEmpty()).toBe(true);
  });
  test("throw adds pokemon to storage when storage is empty", () => {
    const pokeball = new Pokeball();
    pokeball.throw("charmander");
    expect(pokeball.storage).toEqual(["charmander"]);
    pokeball.throw("squirtle");
    expect(pokeball.storage).toEqual(["charmander"]);
  });
  test("throw removes pokemon from storage and removes it when no argument is passed", () => {
    const pokeball = new Pokeball();
    pokeball.throw("charmander");
    const ourPokemon = pokeball.throw();
    expect(pokeball.isEmpty()).toEqual(true);
    expect(ourPokemon).toEqual("charmander");
  });

  test("contains returns the name of stored pokemon or empty", () => {
    const pokeball = new Pokeball();
    expect(pokeball.contains()).toBe("empty...");
    pokeball.throw("bulbasaur");
    expect(pokeball.contains()).toBe("bulbasaur");
  });
});

describe("trainer class", () => {
  describe("properties", () => {
    test("has belt property", () => {
      const trainer = new Trainer();
      expect(trainer.hasOwnProperty("belt")).toBe(true);
    });
    test("has 6 items that are all pokeballs", () => {
      const trainer = new Trainer();
      let count = 0;
      trainer.belt.forEach((item) => {
        if (item instanceof Pokeball) {
          count++;
        }
      });
      expect(count).toBe(6);
    });
  });
  describe.only("methods", () => {
    test("catch catches pokemon in parameter when first ball is empty", () => {
      const trainer = new Trainer();
      expect(trainer.belt[0].isEmpty()).toBe(true);
      trainer.catch("charmander"); // caught a pokemon
      expect(trainer.belt[0].isEmpty()).toBe(false);
    });
    test("if ball isEmpty throw next empty ball", () => {
      const trainer = new Trainer();
      trainer.catch("charmander"); // caught a pokemon
      trainer.catch("pikachu"); // caught a pokemon in second ball
      expect(trainer.belt[1].isEmpty()).toBe(false);
      trainer.catch("squirtle"); // caught a pokemon in third ball
      expect(trainer.belt[2].isEmpty()).toBe(false);
    });
    test("if no pokeballs are empty console.log 'no empty pokeballs'", () => {
      const trainer = new Trainer();
      trainer.catch("charmander"); // caught in first ball
      trainer.catch("pikachu"); // caught in second ball
      trainer.catch("dodrio"); // caught in third ball
      trainer.catch("gastly"); // caught in fouth ball
      trainer.catch("onix"); // caught in fifth ball
      trainer.catch("hitmonchan"); // caught in sixth ball
      const consoleSpy = jest.spyOn(console, "log");
      trainer.catch("dragonite"); // should fail as all balls are full
      expect(consoleSpy).toHaveBeenCalledWith("no empty pokeballs");
    });
    test("get pokemon from first ball", () => {
      const trainer = new Trainer();
      trainer.catch("pikachu");
      expect(trainer.getPokemon("pikachu")).toBe("pikachu");
    });
    test("gets pokemon from any ball", () => {
      const trainer = new Trainer();
      trainer.catch("pikachu");
      trainer.catch("charmander");
      trainer.catch("squirtle");
      trainer.catch("bulbasaur");
      trainer.catch("rattata");
      expect(trainer.getPokemon("pikachu")).toBe("pikachu");
      expect(trainer.getPokemon("squirtle")).toBe("squirtle");
      expect(trainer.getPokemon("rattata")).toBe("rattata");
    });
  });
});
