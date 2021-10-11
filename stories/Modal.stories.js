import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Modal } from "../src/Components";

export default {
  title: "Modal",
  component: Modal,
};

const Template = (args) => (
  <MemoryRouter>
    <Modal {...args} />
  </MemoryRouter>
);

export const Small = Template.bind({});

Small.args = {
  size: "small",
};

export const Medium = Template.bind({});

Medium.args = {
  size: "medium",
};

export const Large = Template.bind({});

Large.args = {
  size: "large",
};
