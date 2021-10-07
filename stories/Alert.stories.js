import React from "react";
import { storiesOf } from "@storybook/react";

import { Alert } from "../src/Components";

storiesOf("Alert", module)
  .add("Success", () => <Alert.Success message="Mensagem de teste" />)
  .add("Info", () => <Alert.Info message="Mensagem de teste" />)
  .add("Attention", () => <Alert.Attention message="Mensagem de teste" />)
  .add("Warning", () => <Alert.Warning message="Mensagem de teste" />)
  .add("Error", () => <Alert.Error message="Mensagem de teste" />)
  .add("Question", () => <Alert.Question message="Mensagem de teste" />);
