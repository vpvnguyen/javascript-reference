function Person (first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
};

const me = new Person('Vincent', 'Nguyen', 31);
console.log(me);