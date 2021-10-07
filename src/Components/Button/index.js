import React from "react";
import { Button } from "antd";
import PropTypes from "prop-types";
import { getClassName, getDefaultStyles, getStyle } from "./rules";
import styles from "./styles";
import "./styles.less";

const ButtonComponent = ({ children, type, style = {}, ...othersProps }) => (
  <Button
    className={getClassName(type)}
    style={getDefaultStyles(type, style)}
    {...othersProps}
  >
    {children}
  </Button>
);

const Primary = ({ children, type, style = {}, ...othersProps }) => (
  <ButtonComponent
    style={getStyle(type, styles.noBorder, styles.primaryBg, style)}
    {...othersProps}
  >
    {children}
  </ButtonComponent>
);

const Red = ({ children, type, style = {}, ...othersProps }) => (
  <ButtonComponent
    style={getStyle(type, styles.noBorder, styles.redBg, style)}
    {...othersProps}
  >
    {children}
  </ButtonComponent>
);

const Green = ({ children, type, style = {}, ...othersProps }) => (
  <ButtonComponent
    style={getStyle(type, styles.noBorder, styles.greenBg, style)}
    {...othersProps}
  >
    {children}
  </ButtonComponent>
);

const DarkBlueGrey = ({ children, type, style = {}, ...othersProps }) => (
  <ButtonComponent
    style={getStyle(type, styles.noBorder, styles.darkBlueGreyBg, style)}
    {...othersProps}
  >
    {children}
  </ButtonComponent>
);

const BlueGrey = ({ children, type, style = {}, ...othersProps }) => (
  <ButtonComponent
    style={getStyle(type, styles.noBorder, styles.blueGreyBg, style)}
    {...othersProps}
  >
    {children}
  </ButtonComponent>
);

const Add = ({ children, type, style = {}, ...othersProps }) => (
  <ButtonComponent
    style={getStyle(type, styles.noBorder, styles.greenAddBg, style)}
    {...othersProps}
  >
    {children}
  </ButtonComponent>
);

const Dark = ({ children, type, style = {}, ...othersProps }) => (
  <ButtonComponent
    style={getStyle(type, styles.noBorder, styles.darkGreyBatchBg, style)}
    {...othersProps}
  >
    {children}
  </ButtonComponent>
);

ButtonComponent.Primary = Primary;
ButtonComponent.Red = Red;
ButtonComponent.Green = Green;
ButtonComponent.Add = Add;
ButtonComponent.DarkBlueGrey = DarkBlueGrey;
ButtonComponent.BlueGrey = BlueGrey;
ButtonComponent.Dark = Dark;

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
Primary.propTypes = ButtonProps;
Red.propTypes = ButtonProps;
Green.propTypes = ButtonProps;
Add.propTypes = ButtonProps;
DarkBlueGrey.propTypes = ButtonProps;
BlueGrey.propTypes = ButtonProps;
Dark.propTypes = ButtonProps;

export default ButtonComponent;
