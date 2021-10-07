import React from 'react';
import PropTypes from 'prop-types';
import { ArrowLeft, ArrowRight } from 'assets/CustomIcons';
import styles, { Button } from './styles';

const NavigationArrowComponent = ({ direction, tiny = false, style, ...othersProps }) => (
    <Button
        shape="circle"
        icon={
            direction === 'left' ? (
                <ArrowLeft icon="" style={{ ...styles.icon, ...styles.iconLeft, ...(tiny && styles.tinyLeftIcon) }} />
            ) : (
                <ArrowRight style={{ ...styles.icon, ...styles.iconRight, ...(tiny && styles.tinyRightIcon) }} />
            )
        }
        direction={direction}
        style={style}
        {...othersProps}
    />
);

NavigationArrowComponent.propTypes = {
    direction: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

NavigationArrowComponent.defaultProps = {
    direction: 'right',
    style: {},
};

export default NavigationArrowComponent;
