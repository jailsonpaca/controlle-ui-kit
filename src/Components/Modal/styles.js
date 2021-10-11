import { Divider as AntdDivider, Modal as AntdModal } from "antd";
import styled from "styled-components";

export const Modal = styled(AntdModal)`
  & .ant-modal-content {
    padding: 35px 46px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Divider = styled(AntdDivider)`
  margin-top: 15px;
`;
