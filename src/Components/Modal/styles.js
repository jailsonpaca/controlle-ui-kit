import { Divider as AntdDivider, Modal as AntdModal } from "antd";
import styled from "styled-components";

export default {
  closeIcon: {
    width: 24,
    height: 24,
    marginTop: 20,
    marginRight: 20,
  },
};

export const Modal = styled(AntdModal)`
  & .ant-modal-content {
    padding: 35px 40px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Divider = styled(AntdDivider)`
  margin-top: 15px;
`;
