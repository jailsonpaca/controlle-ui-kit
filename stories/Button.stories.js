import React from "react";
import { storiesOf } from "@storybook/react";

import { Button, Text } from "../src/Components";
import { COLORS } from "../src/styles";

storiesOf("Button", module)
  .add("Primary", () => (
    <Button.Primary>
      <Text.Regular color={COLORS.white}>Default</Text.Regular>
    </Button.Primary>
  ))
  .add("Red", () => (
    <Button.Red>
      <Text.Regular color={COLORS.white}>Default</Text.Regular>
    </Button.Red>
  ))
  .add("Green", () => (
    <Button.Green>
      <Text.Regular color={COLORS.white}>Default</Text.Regular>
    </Button.Green>
  ))
  .add("DarkBlueGrey", () => (
    <Button.DarkBlueGrey>
      <Text.Regular color={COLORS.white}>Default</Text.Regular>
    </Button.DarkBlueGrey>
  ))
  .add("BlueGrey", () => (
    <Button.BlueGrey>
      <Text.Regular color={COLORS.white}>Default</Text.Regular>
    </Button.BlueGrey>
  ))
  .add("Add", () => (
    <Button.Add>
      <Text.Regular color={COLORS.white}>Default</Text.Regular>
    </Button.Add>
  ))
  .add("Dark", () => (
    <Button.Dark>
      <Text.Regular color={COLORS.white}>Default</Text.Regular>
    </Button.Dark>
  ));
