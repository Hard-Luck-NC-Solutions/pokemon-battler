class Pokemon {
  constructor(name, hitPoints, attackingDamage) {
    this.name = name;
    this.type = "normal";
    this.hitPoints = hitPoints;
    this.attackingDamage = attackingDamage;
    this.move = "tackle";
  }
  isEffectiveAgainst() {
    return this.type !== "normal";
  }

  isWeakTo() {
    return this.type !== "normal";
  }
  takeDamage(damage) {
    this.hitPoints -= damage;
  }
  useMove() {
    return this.attackingDamage;
  }
  hasFainted() {
    return this.hitPoints === 0;
  }
}

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

class Charmander extends Fire {
  constructor(name, hitPoints, attackingDamage) {
    super(name, hitPoints, attackingDamage);
    this.move = "ember";
  }
}
class Squirtle extends Water {
  constructor(name, hitPoints, attackingDamage) {
    super(name, hitPoints, attackingDamage);
    this.move = "water gun";
  }
}

class Bulbasaur extends Grass {
  constructor(name, hitPoints, attackingDamage) {
    super(name, hitPoints, attackingDamage);
    this.move = "vine whip";
  }
}
class Rattata extends Pokemon {
  constructor(name, hitPoints, attackingDamage) {
    super(name, hitPoints, attackingDamage);
  }
}

module.exports = {
  Pokemon,
  Water,
  Fire,
  Grass,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
};
