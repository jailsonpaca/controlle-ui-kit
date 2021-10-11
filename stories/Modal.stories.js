import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Modal, Text } from "../src/Components";

export default {
  title: "Modal",
  component: Modal,
};

const Template = (args) => (
  <MemoryRouter>
    <Modal {...args}>
      <Text.Bold>Este é um modal</Text.Bold>
    </Modal>
  </MemoryRouter>
);

export const Medium = Template.bind({});

Medium.args = {
  titleHeader: "Componente Modal",
  size: "medium",
};

export const Large = Template.bind({});

Large.args = {
  titleHeader: "Componente Modal",
  size: "large",
};
