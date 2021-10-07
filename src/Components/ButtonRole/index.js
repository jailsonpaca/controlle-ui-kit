import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, Image } from 'Components';
import { COLORS } from 'styles';
import { Button } from 'antd';
import styles from './styles';

const ButtonRole = ({ title, img, styleContent, description, selected, onClick }) => {
    const [hover, setHover] = useState(false);
    return (
        <Button
            style={{ ...styles.button, ...((selected || hover) && styles.hover) }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onClick}
        >
            {img && <Image size={40} rounded src={img} style={styles.image} />}
            <div style={{ ...styles.content, ...styleContent }}>
                <Text.Bold size={14} {...((selected || hover) && { color: COLORS.white })}>
                    {title}
                </Text.Bold>
                <Text.Regular
                    size={13}
                    style={styles.description}
                    color={selected || hover ? COLORS.white : COLORS.blueGrey}
                >
                    {description}
                </Text.Regular>
            </div>
        </Button>
    );
};

ButtonRole.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
    selected: PropTypes.bool,
    onClick: PropTypes.func,
};

export default ButtonRole;
