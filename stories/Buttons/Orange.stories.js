import React from "react";
import { text } from "@storybook/addon-knobs";
import { Button, Text } from "../../src/Components";
import { argTypes } from "./rules";

export default {
  title: "Buttons/Orange",
  component: Button,
  argTypes,
};

const Template = (args) => <Button.Orange {...args} />;

export const Small = Template.bind({});

Small.args = {
  icon: "alert-circle",
  loading: false,
  disabled: false,
  size: "small",
  type: "contained",
  children: text("children", "Small button"),
};

export const Big = Template.bind({});

Big.args = {
  icon: "alert-circle",
  loading: false,
  disabled: false,
  size: "large",
  type: "contained",
  children: "Big button",
};
