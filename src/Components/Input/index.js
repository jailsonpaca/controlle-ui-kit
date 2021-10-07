import React from 'react';
import PropTypes from 'prop-types';
import styles, { InputANT } from './styles';

const InputComponent = ({ placeholder, style, ...othersProps }) => (
    <InputANT placeholder={placeholder} style={{ ...styles.input, ...style }} {...othersProps} />
);

InputComponent.propTypes = {
    placeholder: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

InputComponent.defaultProps = {
    placeholder: null,
};

export default InputComponent;
