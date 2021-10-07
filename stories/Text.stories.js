import React from "react";
import { storiesOf } from "@storybook/react";

import { Text } from "../src/Components";

storiesOf("Text", module)
  .add("Regular", () => <Text.Regular>Default</Text.Regular>)
  .add("Light", () => <Text.Light>Default</Text.Light>)
  .add("SemiBold", () => <Text.SemiBold>Default</Text.SemiBold>)
  .add("Bold", () => <Text.Bold>Default</Text.Bold>)
  .add("Black", () => <Text.Black>Default</Text.Black>)
  .add("ExtraBold", () => <Text.ExtraBold>Default</Text.ExtraBold>);
