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
module.exports = Pokemon;
