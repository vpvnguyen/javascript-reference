const array = ["javascript", "html", "css"];
const array2 = ["php", "python"];
const array3 = ["javascript", "html", "scss"];

const languages = {
  html: "#fff4e6",
  css: "#1c7ed6",
  scss: "#1c7ed6",
  javascript: "#fff3bf",
  typescript: "#2b7489",
  php: "#7950f2",
  python: "#306998",
  sql: "#cccccc",
  tsql: "#cccccc",
};

const getKeyFromArray = (array) => {
  const key = Object.keys(languages);

  const languageColors = array.map((value, index) => {
    if (key.includes(value)) return { [array[index]]: languages[value] };
    // javascript #fff3bf
    // html #fff4e6
    // css #1c7ed6
  });

  console.log(languageColors); // [ { javascript: '#fff3bf' }, { html: '#fff4e6' }, { css: '#1c7ed6' } ]
};

getKeyFromArray(array);
