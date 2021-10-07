import React from "react";
import { Button } from "antd";
import PropTypes from "prop-types";
import { getClassName, getDefaultStyles, getStyle } from "./rules";
import styles from "./styles";
import "./styles.less";

const ButtonComponent = ({
  children,
  type,
  style = {},
  className,
  disabled,
  ...othersProps
}) => (
  <Button
    className={getClassName(type, className)}
    style={getDefaultStyles(type, disabled, style)}
    disabled={disabled}
    {...othersProps}
  >
    {children}
  </Button>
);

const Green = ({ children, type, style = {}, ...othersProps }) => (
  <ButtonComponent
    style={getStyle(type, styles.noBorder, styles.greenBg, style)}
    className="btnGreen"
    {...othersProps}
  >
    {children}
  </ButtonComponent>
);

const Primary = ({ children, type, style = {}, ...othersProps }) => (
  <ButtonComponent
    style={getStyle(type, styles.noBorder, styles.primaryBg, style)}
    className="btnPrimary"
    {...othersProps}
  >
    {children}
  </ButtonComponent>
);

const Red = ({ children, type, style = {}, ...othersProps }) => (
  <ButtonComponent
    style={getStyle(type, styles.noBorder, styles.redBg, style)}
    className="btnRed"
    {...othersProps}
  >
    {children}
  </ButtonComponent>
);

const Grey = ({ children, type, style = {}, ...othersProps }) => (
  <ButtonComponent
    style={getStyle(type, styles.noBorder, styles.greyBg, style)}
    className="btnGrey"
    {...othersProps}
  >
    {children}
  </ButtonComponent>
);

const Orange = ({ children, type, style = {}, ...othersProps }) => (
  <ButtonComponent
    style={getStyle(type, styles.noBorder, styles.orangeBg, style)}
    className="btnOrange"
    {...othersProps}
  >
    {children}
  </ButtonComponent>
);

ButtonComponent.Green = Green;
ButtonComponent.Primary = Primary;
ButtonComponent.Red = Red;
ButtonComponent.Grey = Grey;
ButtonComponent.Orange = Orange;

const ButtonProps = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  type: PropTypes.string,
  size: PropTypes.string,
};

ButtonComponent.defaultProps = {
  style: {},
  size: "small",
};

ButtonComponent.propTypes = ButtonProps;
Green.propTypes = ButtonProps;
Primary.propTypes = ButtonProps;
Grey.propTypes = ButtonProps;
Red.propTypes = ButtonProps;
Orange.propTypes = ButtonProps;

export default ButtonComponent;
