// Make a Cat constructor that takes arguments name and weight to instantiate a new cat object. The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.

function Cat(name, weight) {
  if (!name || !weight) {
    throw new Error("properties must be provided");
  }

  this.name = name;
  this._weight = weight;

  Object.defineProperty(this, "weight", {
    get: function () {
      return this._weight;
    },
    set: function (newWeight) {
      Cat.totalWeight = Cat.totalWeight - this._weight + newWeight;
      this._weight = newWeight;
    },
  });

  if (!Cat.totalWeight && !Cat.count) {
    Cat.totalWeight = 0;
    Cat.count = 0;
  }

  Cat.totalWeight += this.weight;
  Cat.count += 1;
}

Cat.averageWeight = function () {
  return Cat.totalWeight / Cat.count;
};

const garfield = new Cat("Garfield", 25);

const felix = new Cat("Felix", 15);

console.log("Average weight:", Cat.averageWeight()); // Output: 20

felix.weight = 35;
felix.weight; // 25
console.log(felix.weight);
console.log(Cat.averageWeight()); // now 25
