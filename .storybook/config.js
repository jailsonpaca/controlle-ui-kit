import React from "react";
import GlobalStyles from "../src/styles/global";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import centered from "@storybook/addon-centered/react";
import "antd/dist/antd.css";
import theme from "./theme";

import "./reset.css";

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyles />
      {storyFn()}
    </React.Fragment>
  );
}

addParameters({
  options: {
    theme,
  },
});

addDecorator(withGlobalStyles);
addDecorator(withInfo);
addDecorator(centered);

// Import all stories
configure(require.context("../stories", true, /\.stories\.js$/), module);
