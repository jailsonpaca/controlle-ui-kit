import React from 'react';
import { Alert } from 'antd';
import PropTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';
import { COLORS } from 'styles';
import styles from './styles';

const AlertComponent = ({ message, description, style, ...othersProps }) => (
    <Alert
        message={message}
        description={description}
        style={{
            ...styles.alert,
            ...style,
        }}
        {...othersProps}
    />
);

const Success = ({ message, description, color, style, size, ...othersProps }) => (
    <Alert
        message={message}
        description={description}
        type="success"
        showIcon
        icon={<FeatherIcon icon="check-circle" style={{ ...styles.icon, color, fontSize: size }} />}
        style={{
            ...styles.alert,
            ...style,
        }}
        {...othersProps}
    />
);

const Info = ({ message, description, color, style, size, ...othersProps }) => (
    <Alert
        message={message}
        description={description}
        type="info"
        showIcon
        icon={<FeatherIcon icon="info" style={{ ...styles.icon, color, fontSize: size }} />}
        style={{
            ...styles.alert,
            ...style,
        }}
        {...othersProps}
    />
);

const Attention = ({ message, description, color, style, size, ...othersProps }) => (
    <Alert
        message={message}
        description={description}
        type="info"
        showIcon
        icon={<FeatherIcon icon="alert-circle" size={size} style={{ ...styles.icon, color, fontSize: size }} />}
        style={{
            ...styles.alert,
            ...style,
        }}
        {...othersProps}
    />
);

const Warning = ({ message, description, color, style, size, ...othersProps }) => (
    <Alert
        message={message}
        description={description}
        type="warning"
        showIcon
        icon={<FeatherIcon icon="alert-triangle" style={{ ...styles.icon, color, fontSize: size }} />}
        style={{
            ...styles.alert,
            ...style,
        }}
        {...othersProps}
    />
);

const Error = ({ message, description, color, style, size, ...othersProps }) => (
    <Alert
        message={message}
        description={description}
        type="error"
        showIcon
        icon={<FeatherIcon icon="x-circle" style={{ ...styles.icon, color, fontSize: size }} />}
        style={{
            ...styles.alert,
            ...style,
        }}
        {...othersProps}
    />
);

const Question = ({ message, description, color, style, size, ...othersProps }) => (
    <Alert
        message={message}
        description={description}
        type="question"
        showIcon
        icon={<FeatherIcon icon="help-circle" style={{ ...styles.icon, color, width: size, fontSize: size }} />}
        style={{
            ...styles.alert,
            ...style,
        }}
        {...othersProps}
    />
);

AlertComponent.Success = Success;
AlertComponent.Info = Info;
AlertComponent.Attention = Attention;
AlertComponent.Warning = Warning;
AlertComponent.Error = Error;
AlertComponent.Question = Question;

const AlertProps = {
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    message: PropTypes.string,
    description: PropTypes.string,
};
AlertComponent.propTypes = AlertProps;
Success.propTypes = AlertProps;
Info.propTypes = AlertProps;
Attention.propTypes = AlertProps;
Warning.propTypes = AlertProps;
Error.propTypes = AlertProps;
Question.propTypes = AlertProps;

AlertComponent.defaultProps = {
    description: ' ',
    style: {},
    size: '14px',
    message: '',
    color: COLORS.greenAdd,
};

AlertComponent.Attention.defaultProps = {
    color: COLORS.greenAdd,
};

AlertComponent.Question.defaultProps = {
    color: COLORS.fordGrey,
    size: '16px',
};

export default AlertComponent;
