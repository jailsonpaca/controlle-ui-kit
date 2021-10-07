import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ColorButton from './ColorButton';
import { Button, Text } from '../index';
import { COLORS } from './colors';
import './styles.less';

const ColorPicker = ({ stateCor, cor, movement }) => {
    const [arrayColors, setArrayColors] = useState();
    const [showBtnColors, setShowBtnColors] = useState(true);
    const [hideBtnColors, setHideBtnColors] = useState(false);

    const hideButtons = () => {
        if (hideBtnColors) {
            setHideBtnColors(false);
            setShowBtnColors(true);
        }
    };

    const handleShowBtnColors = () => setHideBtnColors(true);
    const handleHideBtnColors = () => setShowBtnColors(false);

    const setExpensesColor = () => {
        const newValue = COLORS.expenses.slice(0, 10);
        setArrayColors(newValue);

        hideButtons();
    };

    const setEarningColor = () => {
        const newValue = COLORS.earnings.slice(0, 10);
        setArrayColors(newValue);

        hideButtons();
    };

    const setOtherColors = () => {
        const newValue = COLORS.others.slice(0, 10);
        setArrayColors(newValue);

        hideButtons();
    };

    useEffect(() => {
        switch (movement) {
            case 0:
                setExpensesColor();
                return;
            case 1:
                setEarningColor();
                return;
            case 2:
                setOtherColors();
                return;
            default:
                setExpensesColor();
        }
    }, [movement]);

    const setColors = () => {
        let allColors;
        switch (movement) {
            case 0:
                allColors = COLORS.expenses;
                setArrayColors(allColors);
                handleHideBtnColors();
                handleShowBtnColors();
                return;
            case 1:
                allColors = COLORS.earnings;
                setArrayColors(allColors);
                handleHideBtnColors();
                handleShowBtnColors();
                return;
            case 2:
                allColors = COLORS.others;
                setArrayColors(allColors);
                handleHideBtnColors();
                handleShowBtnColors();
                return;
            default:
                allColors = COLORS.expenses;
                setArrayColors(allColors);
                handleHideBtnColors();
                handleShowBtnColors();
        }
    };

    const handleHiddenBtn = () => {
        switch (movement) {
            case 0:
                setExpensesColor();
                break;
            case 1:
                setEarningColor();
                break;
            case 2:
                setOtherColors();
                break;
            default:
                setExpensesColor();
        }
    };

    return (
        <div className="container">
            <Text.Regular size={15}>Cor para identificação em relatórios</Text.Regular>
            <div className="containerColor">
                {arrayColors &&
                    arrayColors.map(item => (
                        <ColorButton color={item} stateCor={stateCor} cor={cor} key={Math.random()} />
                    ))}
            </div>
            {showBtnColors && (
                <Button type="link" className="BtnShowColors" onClick={setColors} style={{ paddingLeft: 0 }}>
                    <Text.Regular color={COLORS.darkBlueGrey} style={{ textDecoration: 'underline' }}>
                        Mostrar cores
                    </Text.Regular>
                </Button>
            )}
            {hideBtnColors && (
                <Button type="link" className="BtnShowColors" onClick={handleHiddenBtn} style={{ paddingLeft: 0 }}>
                    <Text.Regular color={COLORS.darkBlueGrey} style={{ textDecoration: 'underline' }}>
                        Ocultar cores
                    </Text.Regular>
                </Button>
            )}
        </div>
    );
};

ColorPicker.propTypes = {
    stateCor: PropTypes.func,
    cor: PropTypes.string,
    movement: PropTypes.number,
};

export default ColorPicker;
