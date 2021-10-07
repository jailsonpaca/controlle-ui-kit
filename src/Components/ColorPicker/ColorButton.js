import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import FeatherIcon from 'feather-icons-react';
import './styles.less';

const ColorButton = ({ color, stateCor, cor }) => {
    const [selectedColor, setSelectedColor] = useState(null);

    const handleSelectColor = () => {
        setSelectedColor(color);
        stateCor(color);
    };

    return (
        <Button
            style={{
                background: color,
                marginRight: 9,
                marginBottom: 10,
                height: 28,
            }}
            size="middle"
            className="btnColorButton"
            onClick={handleSelectColor}
            shape="circle"
            icon={
                selectedColor === cor || color === cor ? (
                    <FeatherIcon style={{ color: 'white' }} icon="check" />
                ) : (
                    <FeatherIcon style={{ color }} icon="" />
                )
            }
        />
    );
};

ColorButton.propTypes = {
    color: PropTypes.string,
    stateCor: PropTypes.func,
    cor: PropTypes.string,
};

export default ColorButton;
