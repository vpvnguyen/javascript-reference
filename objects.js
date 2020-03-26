var foo = {
  a: "bar",
  b: "baz",
  c: [1, 2, 3],
  d: function() {
    return this.c[0];
  },
  e: function() {
    return this.a + this.b;
  }
};

var model = {
  stats: ["Strength", "Dexterity", "Constitution"],
  skills: {
    a2: "Acrobatics",
    b2: "Animal Handling",
    c2: "Arcana"
  }
};

console.log(foo.d()); // "1"
console.log(foo.e()); // barbaz
console.log(`${model.skills.a2} (${model.stats[0].substring(0, 3)})`); // Acrobatics (Str)

for (stat of model.stats) {
  console.log(stat); // Strength Dexterity Constitution
}
