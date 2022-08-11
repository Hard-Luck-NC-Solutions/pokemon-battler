class Pokemon {
  constructor(name, hitpoints, attackingDamage) {
    this.name = name;
    this.type = "normal";
    this.hitpoints = hitpoints;
    this.attackingDamage = attackingDamage;
    this.move = "tackle";
  }
}

module.exports = Pokemon;
