import { Divider as AntdDivider, Modal as AntdModal } from "antd";
import styled from "styled-components";

export default {
  closeIcon: {
    width: 24,
    height: 24,
  },
  content: {
    paddingTop: 20,
    paddingBottom: 20,
  },
};

export const Modal = styled(AntdModal)`
  & .ant-modal-close {
    margin: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    .ant-modal-close-x {
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
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
