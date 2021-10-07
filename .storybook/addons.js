import "@storybook/addon-actions/register";
import "@storybook/addon-controls/register";
import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";

addons.setConfig({
  theme: themes.dark,
});
