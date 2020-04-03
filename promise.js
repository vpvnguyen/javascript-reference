console.log("Start");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("setTimeout complete");
  }, 2000);
});

const login = (email, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Logging in...");
      resolve({ email, password });
    }, 2000);
  });

const userData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting data...");
      resolve(console.log("Got user's data"));
    }, 2000);
  });

promise.then(result => console.log(result)); // setTimeout complete
login("vpvnguyen", 123456)
  .then(user => console.log(user.email, user.password))
  .then(() => userData()); // Logging in... // vpvnguyen 123456

console.log("End");
