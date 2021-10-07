const theme = require("../src/styles/themeAnt");

module.exports = [
  {
    name: "@storybook/preset-ant-design",
    options: {
      lessOptions: {
        modifyVars: theme,
      },
    },
  },
];
