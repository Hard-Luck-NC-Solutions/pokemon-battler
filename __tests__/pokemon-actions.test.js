const { Pokeball, Battle, Trainer } = require("../pokemon-actions.js");

describe.only("Pokeball", () => {
  test("pokeball has storage", () => {
    const pokeball = new Pokeball();
    expect(pokeball.hasOwnProperty("storage")).toBe(true);
  });
});

/*
pokeball has storage




*/
