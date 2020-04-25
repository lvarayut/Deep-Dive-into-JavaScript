// 1. What would be the value of "this" defined in the attack functions (both ironMan and antMan)?
// 2. Correct the antMan object to print out its context

const ironMan = {
  name: 'Ironman',
  attack() {
    console.log(this);
  }
};

const antMan = {
  name: 'Antman',
  attack() {
    return function () {
      console.log(this);
    };
  }
};

ironMan.attack();
antMan.attack()();
