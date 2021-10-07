import React from "react";
import { text } from "@storybook/addon-knobs";

import { Button, Text } from "../../src/Components";
import { COLORS } from "../../src/styles";

export default {
  title: "Buttons/Orange",
  component: Button,
  argTypes: {
    disabled: {
      options: [false, true],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Button.Orange {...args} />;

export const Small = Template.bind({});

Small.args = {
  disabled: false,
  size: "small",
  children: (
    <Text.Regular size={14} color={COLORS.white}>
      {text("children", "Small button")}
    </Text.Regular>
  ),
};

export const Big = Template.bind({});

Big.args = {
  disabled: false,
  size: "large",
  children: (
    <Text.Regular size={14} color={COLORS.white}>
      Big button
    </Text.Regular>
  ),
};
