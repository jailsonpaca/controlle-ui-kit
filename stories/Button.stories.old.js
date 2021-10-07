import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, select, text } from "@storybook/addon-knobs";

import { Button, Text } from "../src/Components";
import { COLORS } from "../src/styles";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("Primary", () => (
    <Button.Primary
      disabled={boolean("disabled", false)}
      onClick={action("clicked")}
    >
      <Text.Regular size={14} color={COLORS.white}>
        {text("children", "Small button")}
      </Text.Regular>
    </Button.Primary>
  ))
  .add("Red", () => (
    <Button.Red>
      <Text.Regular size={14} color={COLORS.white}>
        Default
      </Text.Regular>
    </Button.Red>
  ))
  .add("Green", () => (
    <Button.Green>
      <Text.Regular size={14} color={COLORS.white}>
        Default
      </Text.Regular>
    </Button.Green>
  ))
  .add("DarkBlueGrey", () => (
    <Button.DarkBlueGrey>
      <Text.Regular size={14} color={COLORS.white}>
        Default
      </Text.Regular>
    </Button.DarkBlueGrey>
  ))
  .add("BlueGrey", () => (
    <Button.BlueGrey>
      <Text.Regular size={14} color={COLORS.white}>
        Default
      </Text.Regular>
    </Button.BlueGrey>
  ))
  .add("Add", () => (
    <Button.Add>
      <Text.Regular size={14} color={COLORS.white}>
        Default
      </Text.Regular>
    </Button.Add>
  ))
  .add("Dark", () => (
    <Button.Dark>
      <Text.Regular size={14} color={COLORS.white}>
        Default
      </Text.Regular>
    </Button.Dark>
  ));
