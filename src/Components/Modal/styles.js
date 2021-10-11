import { COLORS } from "styles";
import { Divider as AntdDivider } from "antd";
import styled from "styled-components";

export default {
  saveButton: {
    color: COLORS.white,
    minWidth: 80,
    minHeight: 36,
  },
  saveDisabled: {
    opacity: 0.5,
    pointer: "none",
  },
  cancelButton: {
    minWidth: 80,
    height: 36,
  },
  content: {
    paddingTop: 2,
    paddingLeft: 23,
    paddingRight: 23,
    paddingBottom: 20,
  },
  disabled: {
    opacity: 0.5,
    pointer: "cursor",
  },
};

export const Footer = styled.div`
  display: "flex";
  justify-content: "space-between";
  padding-bottom: 40;
`;

export const Divider = styled(AntdDivider)`
  margin-top: 15px;
`;
