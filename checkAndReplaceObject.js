const theme = {
  HEADER: "NEW",
  NAVIGATION: {
    name: "NEW",
    number: "NEW",
    string: "NEW",
    nestedBody: {
      name: "NEW",
      string: "NEW",
    },
  },
  FOOTER: {
    name: "NEW",
  },
};

const defaultTheme = {
  HEADER: "DEFAULT",
  APPBAR: "DEFAULT",
  DRAWER: {
    name: "DEFAULT",
    string: "DEFAULT",
    number: "DEFAULT",
    nestedBody: {
      name: "DEFAULT",
      string: "DEFAULT",
      number: "DEFAULT",
    },
    nestedBody2: {
      name: "DEFAULT",
    },
  },
  NAVIGATION: {
    name: "DEFAULT",
  },
  FOOTER: {
    name: "DEFAULT",
    number: "DEFAULT",
  },
};

const checkObjectKeys = (theme, defaultTheme) => {
  return Object.keys(theme).includes(Object.keys(defaultTheme));
};

const mapKeys = () => {
  Object.entries(theme).map((value) => console.log(value));
};

const createTheme = (theme, defaultTheme) => {
  const themeKeys = Object.keys(theme);
  const defaultThemeKeys = Object.keys(defaultTheme);

  console.log(themeKeys);
  console.log(defaultThemeKeys);

  const objectKeys = checkObjectKeys(theme, defaultTheme);
  console.log(objectKeys);
};

// createTheme(theme, defaultTheme);
mapKeys();
