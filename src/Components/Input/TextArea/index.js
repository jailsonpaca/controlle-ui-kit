import React from 'react';
import PropTypes from 'prop-types';
import styles, { TextArea as StyledTextArea } from './styles';

const TextArea = ({ placeholder, style, ...othersProps }) => (
    <StyledTextArea placeholder={placeholder} style={{ ...styles.input, ...style }} {...othersProps} />
);

TextArea.propTypes = {
    placeholder: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

TextArea.defaultProps = {
    placeholder: null,
};

export default TextArea;
