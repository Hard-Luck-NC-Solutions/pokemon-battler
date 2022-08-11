const Pokemon = require("./pokemon");

class Water extends Pokemon {
  constructor(name, hitPoints, attackingDamage) {
    super(name, hitPoints, attackingDamage);
    this.type = "water";
  }
  isEffectiveAgainst(pokemon) {
    return pokemon.type === "fire";
  }
  isWeakTo(pokemon) {
    return pokemon.type === "grass";
  }
}
module.exports = Water;
