import { Divider as AntdDivider, Modal as AntdModal } from "antd";
import styled from "styled-components";

export default {
  closeIcon: {
    width: 36,
    height: 36,
    padding: 6,
    marginTop: 16,
    marginRight: 16,
    backgroundColor: "#EEF0F8",
    borderRadius: "50%",
  },
};

export const Modal = styled(AntdModal)`
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
