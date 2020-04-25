// 1. What would be the value of "this" defined in the attack function?
// 2. Correct the code snippet to print out "Ironman is attacking"

const ironMan = {
  name: 'Ironman',
  attack() {
    console.log(`${this.name} is attacking`);
  }
};

const ia = ironMan.attack;

ia();
