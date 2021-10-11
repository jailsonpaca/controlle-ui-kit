import { COLORS } from "styles";
import styled from "styled-components";
import { Button as AntdButton } from "antd";
import FeatherIcon from "feather-icons-react";
import { SEMI_BOLD } from "Components/Text/fonts";

const isLinkOrText = ({ type }) => type === "link" || type === "text";

const isContained = ({ type }) => type === "contained";

const isOutlined = ({ type }) => type === "outlined";

export const Icon = styled(FeatherIcon).withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop),
})`
  ${({ size }) =>
    size === "small" ? "width:15px; height:15px;" : "width:18px; height:18px;"}
  stroke-width:3px;
  margin-top: -2px;
`;

export const Opacity = styled.div.withConfig({
  shouldForwardProp: (prop) => !["loading"].includes(prop),
})`
  opacity: ${(props) => (props.loading ? 0 : 1)};
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${SEMI_BOLD} !important;
  font-size: 14px;
  padding-top: 2px;
`;

export const Button = styled(AntdButton).withConfig({
  shouldForwardProp: (prop) => !["icon", "loading"].includes(prop),
})`
  ${(p) => isOutlined(p) && `background-color:transparent;`};
  position: relative;
  border-radius: 4px;
  &.ant-btn:not(.ant-btn-text):hover,
  &.ant-btn:not(.ant-btn-text):focus {
    border-color: none;
  }
  ${(p) =>
    isLinkOrText(p) &&
    `
    border-color: transparent; 
    background-color: transparent;
    &:hover span.ant-typography {
      color: #0054ff !important;
      transition: color 200ms linear;
    }
    `};
  ${({ disabled }) => disabled && "opacity: 0.2;"}
`;

export const GreenButton = styled(Button)`
  ${(p) =>
    isContained(p) &&
    `&&&{
        background-color: ${COLORS.green};
        &:hover {
          background-color: #139e6a;
        }
        color: ${COLORS.white};
      }`}
  ${(p) =>
    isOutlined(p) &&
    `&&&{
        border: ${COLORS.green} 1px solid;
        color:${COLORS.green};
        &:hover {
          border: #139e6a 1px solid;
          color: #139e6a;
        }
      }`};
  ${(p) => isLinkOrText(p) && `color:${COLORS.green};`}
`;

export const PrimaryButton = styled(Button)`
  ${(p) =>
    isContained(p) &&
    `&&&{
         background-color: ${COLORS.primary}; 
         &:hover {
            background-color: #0049da;
         }
         color: ${COLORS.white};
      }`}
  ${(p) =>
    isOutlined(p) &&
    `&&&{
        border: ${COLORS.primary} 1px solid;
        color:${COLORS.primary};
        &:hover {
          border: #0049da 1px solid;
          color: #0049da;
        }
      }`};
  ${(p) => isLinkOrText(p) && `color:${COLORS.primary};`}
`;

export const RedButton = styled(Button)`
  ${(p) =>
    isContained(p) &&
    `&&&{
        background-color: ${COLORS.red};
        &:hover {
        background-color: #c53a3a;
        } 
        color: ${COLORS.white};
      }`}
  ${(p) =>
    isOutlined(p) &&
    `&&&{
        border: ${COLORS.red} 1px solid;
        color:${COLORS.red};
        &:hover {
          border: #c53a3a 1px solid;
          color: #c53a3a;
        }
      }`};
  ${(p) => isLinkOrText(p) && `color:${COLORS.red};`}
`;

export const GreyButton = styled(Button)`
  ${(p) =>
    isContained(p) &&
    `&&&{
        background-color: ${COLORS.darkBlueGrey};
        &:hover {
          background-color: #6d798c;
        }   
        color: ${COLORS.white};
      }`}
  ${(p) =>
    isOutlined(p) &&
    `&&&{
        border: ${COLORS.darkBlueGrey} 1px solid;
        color:${COLORS.darkBlueGrey};
        &:hover {
          border: #6d798c 1px solid;
          color: #6d798c;
        }
      }`};
  ${(p) => isLinkOrText(p) && `color:${COLORS.darkBlueGrey};`}
`;

export const OrangeButton = styled(Button)`
  ${(p) =>
    isContained(p) &&
    `&&&{
        background-color: ${COLORS.orange};
        &:hover {
        background-color: #e16a3d;
        } 
        color: ${COLORS.white};
      }`}
  ${(p) =>
    isOutlined(p) &&
    `&&&{
        border: ${COLORS.orange} 1px solid;
        color:${COLORS.orange};
        &:hover {
          border: #e16a3d 1px solid;
          color: #e16a3d;
        }
      }`};
  ${(p) => isLinkOrText(p) && `color:${COLORS.orange};`}
`;
