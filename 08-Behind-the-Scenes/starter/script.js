const me = {
    age : 30,
    name : `gg`, 
};

const fred = me;
fred.age = 27;

console.log(me);
console.log(fred);