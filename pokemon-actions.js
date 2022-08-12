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

class Trainer {
  constructor() {
    const ball1 = new Pokeball();
    const ball2 = new Pokeball();
    const ball3 = new Pokeball();
    const ball4 = new Pokeball();
    const ball5 = new Pokeball();
    const ball6 = new Pokeball();
    this.belt = [ball1, ball2, ball3, ball4, ball5, ball6];
  }
  catch(pokemon) {
    for (let i = 0; i < this.belt.length; i++) {
      if (this.belt[i].isEmpty()) {
        this.belt[i].throw(pokemon);
        return;
      }
    }
    console.log("no empty pokeballs");
  }
}

class Battle {}

module.exports = { Pokeball, Battle, Trainer };
