import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'antd';

const getDefaultSize = ({ size }) => ({
    height: size,
    width: size,
});

const getDefaultStyle = ({ size, rounded = true }) => ({
    borderRadius: rounded ? `${size / 2}px` : 0,
    overflow: rounded ? 'hidden' : 'visible',
});

const ImageComponent = ({ children, rounded, style = {}, ...othersProps }) => (
    <div style={style}>
        <Image
            preview={false}
            {...getDefaultSize({ ...(othersProps || {}), rounded })}
            style={getDefaultStyle({ ...(othersProps || {}), rounded })}
            {...othersProps}
        >
            {children}
        </Image>
    </div>
);

ImageComponent.propTypes = {
    children: PropTypes.node,
    rounded: PropTypes.bool,
    size: PropTypes.number,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

ImageComponent.defaultProps = {
    size: 50,
};

export default ImageComponent;
