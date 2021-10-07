import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button as ButtonComponent } from 'Components';
import { COLORS } from 'styles';
import { useHover } from 'utils/hooks';
import styles from './styles';
import { getColor } from './rules';

const getButtonComponent = current => (current ? ButtonComponent : ButtonComponent.Primary);

const getStyle = current => (current ? styles.buttonCurrent : {});

const EntityItem = ({ item, onPress, isCurrent, newCompany = false, buttonText = 'Acessar' }) => {
    const [hoverRef, isHovered] = useHover();
    const Button = getButtonComponent(isCurrent);

    return (
        <div ref={hoverRef} style={styles.div}>
            {newCompany ? (
                <ButtonComponent.Primary style={styles.buttonNew} type="text" onClick={onPress}>
                    <Text.Bold color={COLORS.primary} size={16} style={styles.textName}>
                        + Nova empresa
                    </Text.Bold>
                </ButtonComponent.Primary>
            ) : (
                <>
                    <Text.Regular color={getColor(isCurrent, isHovered)} size={16} style={styles.textName}>
                        {item.name}
                    </Text.Regular>
                    <Button
                        style={{
                            ...styles.button,
                            ...getStyle(isCurrent),
                        }}
                        onClick={onPress}
                    >
                        <Text.Regular size={14} color={isCurrent ? COLORS.green : COLORS.white}>
                            {isCurrent ? 'Ativa' : buttonText}
                        </Text.Regular>
                    </Button>
                </>
            )}
        </div>
    );
};

EntityItem.propTypes = {
    item: PropTypes.shape({ name: PropTypes.string }),
    onPress: PropTypes.func,
    isCurrent: PropTypes.bool,
    newCompany: PropTypes.bool,
    buttonText: PropTypes.string,
};

export default EntityItem;
