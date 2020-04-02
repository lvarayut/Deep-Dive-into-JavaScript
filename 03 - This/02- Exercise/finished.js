// Method I: Use the arrow function 
const antMan = {
  name: 'Antman',
  attack() {
    return () => {
      console.log(this);
    }
  }
};

// Method II: Use the bind method 
const antMan = {
  name: 'Antman',
  attack() {
    return function() {
      console.log(this);
    }.bind(this);
  }
};
