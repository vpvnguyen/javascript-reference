console.log("Start");

const login = (username, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ username, password });
    }, 2000);
  });

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

const displayDataAsync = async () => {
  const loginUser = await login("vpvnguyen", 12345);
  const displayData = await data;
  const displayData2 = await data2;
  console.log(loginUser, displayData, displayData2);
};

displayDataAsync();

console.log("End");
