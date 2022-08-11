const Pokemon = require("./pokemon");

class Fire extends Pokemon {
  constructor(name, hitPoints, attackingDamage) {
    super(name, hitPoints, attackingDamage);
    this.type = "fire";
  }
  isEffectiveAgainst(pokemon) {
    return pokemon.type === "grass";
  }
  isWeakTo(pokemon) {
    return pokemon.type === "water";
  }
}
module.exports = Fire;
