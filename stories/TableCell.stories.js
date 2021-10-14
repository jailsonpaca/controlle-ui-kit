import React from "react";
import { storiesOf } from "@storybook/react";
import { Table } from "antd";

storiesOf("Table", module).add("Normal", () => (
  <Table>
    <Table.Column />
  </Table>
));
