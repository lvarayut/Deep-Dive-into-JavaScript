// 1. What would be the value of "this" defined in the attack move function?
// 2. Guess the result of the code snippet
// 3. Correct the antMan object to print out its context
const ironMan = {
  name: 'Ironman',
  attack() {
    console.log(this);
  }
};

const antMan = {
  name: 'Antman',
  attack() {
    return function() {
      console.log(this);
    };
  }
};

ironMan.attack();
antMan.attack()();
