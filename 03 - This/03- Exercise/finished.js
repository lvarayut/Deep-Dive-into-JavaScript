// Method I: Use the bind method
const ironMan = {
  name: 'Ironman',
  attack() {
    console.log(`${this.name} is attacking`);
  }
};

const ia = ironMan.attack.bind(ironMan);

ia();
