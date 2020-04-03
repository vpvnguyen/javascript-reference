console.log("Start");

const data = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ data: "Data" });
  }, 2000);
});

const data2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ data: "Data2" });
  }, 2000);
});

Promise.all([data, data2]).then(result => console.log(result));

console.log("End");
