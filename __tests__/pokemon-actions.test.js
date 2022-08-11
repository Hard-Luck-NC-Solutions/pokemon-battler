const { Pokeball, Battle, Trainer } = require("../pokemon-actions.js");
const { Charmander } = require("../pokemon.js");

describe.only("Pokeball", () => {
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
/*
pokeball has storage
make an isEmpty method





*/
