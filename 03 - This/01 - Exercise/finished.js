// Method I: Use this.move()
const ironMan = {
  name: 'Ironman',
  attack: function() {
    console.log(`${this.name} is attacking`);
    this.move();
  },
  move: function() {
    console.log(`${this.name} is moving`);
  }
};

ironMan.attack();
