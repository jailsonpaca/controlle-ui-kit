import { Divider as AntdDivider, Modal as AntdModal } from "antd";
import styled from "styled-components";

export default {
  closeIcon: {
    width: 36,
    height: 36,
    padding: 6,
    marginTop: 16,
    marginRight: 16,
    borderRadius: "50%",
  },
  content: {
    paddingTop: 20,
    paddingBottom: 20,
  },
};

export const Modal = styled(AntdModal)`
  & .closeIcon {
    &:hover {
      background-color: #eef0f8;
      -webkit-transition: background-color 300ms linear;
      -ms-transition: background-color 300ms linear;
      transition: background-color 300ms linear;
    }
  }
  & .ant-modal-content {
    padding: 35px 40px;
    box-shadow: none;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Divider = styled(AntdDivider)`
  margin-top: 15px;
`;
