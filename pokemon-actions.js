/*
Pokeball behaviours include:

being able to store a Pokemon
throw it to catch a Pokemon
throw it to release it for battle
check which Pokemon is in the Pokeball
*/

class Pokeball {
  constructor() {
    this.storage = [];
  }
  isEmpty() {
    return this.storage.length === 0;
  }
  throw(pokemon = null) {
    if (pokemon === null) {
      return this.storage.pop();
    }
    if (this.isEmpty()) {
      this.storage.push(pokemon);
      console.log(`${pokemon} caught`);
    }
  }
  contains() {
    return this.isEmpty() ? "empty..." : this.storage[0];
  }
}

class Battle {}

class Trainer {}

module.exports = { Pokeball, Battle, Trainer };
