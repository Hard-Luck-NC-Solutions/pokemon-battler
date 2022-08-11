const Pokemon = require("./pokemon");

class Grass extends Pokemon {
  constructor(name, hitPoints, attackingDamage) {
    super(name, hitPoints, attackingDamage);
    this.type = "grass";
  }
  isEffectiveAgainst(pokemon) {
    return pokemon.type === "water";
  }
  isWeakTo(pokemon) {
    return pokemon.type === "fire";
  }
}
module.exports = Grass;
