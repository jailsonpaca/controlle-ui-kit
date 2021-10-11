import React from "react";
import PropTypes from "prop-types";
import { Loading } from "./Loading";
import {
  GreenButton,
  PrimaryButton,
  RedButton,
  GreyButton,
  OrangeButton,
  Opacity,
  Button,
  Icon,
} from "./styles";

const GetChild = ({ children, icon, loading, size, type }) => (
  <React.Fragment>
    {!!loading && <Loading type={type} />}
    <Opacity loading={!!loading}>
      {!!icon && <Icon size={size} icon={icon} />}
      {children}
    </Opacity>
  </React.Fragment>
);

const ButtonComponent = ({ type, disabled, ...othersProps }) => (
  <Button type={type} disabled={disabled} {...othersProps}>
    <GetChild type={type} {...othersProps} />
  </Button>
);

const Green = ({ type, ...othersProps }) => (
  <GreenButton type={type} {...othersProps}>
    <GetChild type={type} {...othersProps} />
  </GreenButton>
);

const Primary = ({ type, ...othersProps }) => (
  <PrimaryButton type={type} {...othersProps}>
    <GetChild type={type} {...othersProps} />
  </PrimaryButton>
);

const Red = ({ type, ...othersProps }) => (
  <RedButton type={type} {...othersProps}>
    <GetChild type={type} {...othersProps} />
  </RedButton>
);

const Grey = ({ type, ...othersProps }) => (
  <GreyButton type={type} {...othersProps}>
    <GetChild type={type} {...othersProps} />
  </GreyButton>
);

const Orange = ({ type, ...othersProps }) => (
  <OrangeButton type={type} {...othersProps}>
    <GetChild type={type} {...othersProps} />
  </OrangeButton>
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
  icon: PropTypes.string,
};

ButtonComponent.defaultProps = {
  style: {},
  type: "contained",
  size: "small",
  icon: null,
};

Green.defaultProps = ButtonComponent.defaultProps;
Primary.defaultProps = ButtonComponent.defaultProps;
Grey.defaultProps = ButtonComponent.defaultProps;
Red.defaultProps = ButtonComponent.defaultProps;
Orange.defaultProps = ButtonComponent.defaultProps;

ButtonComponent.propTypes = ButtonProps;
Green.propTypes = ButtonProps;
Primary.propTypes = ButtonProps;
Grey.propTypes = ButtonProps;
Red.propTypes = ButtonProps;
Orange.propTypes = ButtonProps;

export default ButtonComponent;
