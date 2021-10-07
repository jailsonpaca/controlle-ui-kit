import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, Text, Dropdown } from 'Components';
import { DatePicker } from 'antd';
import moment from 'moment';
import { COLORS } from 'styles';
import styles, { Menu, Container, CustomContainer, FormItem } from './styles';

const Custom = ({ onPress, dates: defaultDates, setDates, setCustomVisible }) => {
    return (
        <CustomContainer>
            <FormItem label="De">
                <DatePicker
                    autoFocus
                    htmlTitle={false}
                    format="DD/MM/YYYY"
                    value={defaultDates.start}
                    style={styles.datePicker}
                    onChange={e => setDates(dates => ({ ...dates, start: e }))}
                />
            </FormItem>
            <FormItem label="Até">
                <DatePicker
                    format="DD/MM/YYYY"
                    value={defaultDates.end}
                    style={styles.datePicker}
                    onChange={e => setDates(dates => ({ ...dates, end: e }))}
                />
            </FormItem>
            <Button.Green style={styles.payButton} onClick={() => onPress()}>
                <Text.Bold color={COLORS.white} size={14}>
                    Ok
                </Text.Bold>
            </Button.Green>
            <Button
                type="link"
                style={styles.cancelButton}
                onClick={e => {
                    setCustomVisible(false);
                    e.preventDefault();
                }}
            >
                <Text.Bold color={COLORS.blueGreyTwo} size={14}>
                    Cancelar
                </Text.Bold>
            </Button>
        </CustomContainer>
    );
};
const MenuOptions = ({ onPress, setCustomVisible }) => (
    <Menu>
        <Menu.Item key="day" onClick={() => onPress('day')}>
            <span>Hoje</span>
        </Menu.Item>
        <Menu.Item key="week" onClick={() => onPress('week')}>
            <span>Esta semana</span>
        </Menu.Item>
        <Menu.Item key="month" onClick={() => onPress('month')}>
            <span>Este mês</span>
        </Menu.Item>
        <Menu.Item key="custom" onClick={() => setCustomVisible(true)}>
            <span>Período personalizado</span>
        </Menu.Item>
    </Menu>
);

function DropdownPeriod({ date: defaultDates, onPress }) {
    const [visible, setVisible] = useState(false);
    const [customVisible, setCustomVisible] = useState(false);
    const [dates, setDates] = useState({
        start: moment(defaultDates.startDate, 'YYYY-MM-DD'),
        end: moment(defaultDates.endDate, 'YYYY-MM-DD'),
    });

    useLayoutEffect(() => {
        setTimeout(
            () =>
                document.querySelectorAll('.ant-picker-cell').forEach(item => {
                    console.log(item.getAttribute('title'));
                    item.setAttribute('title', '');
                }),
            1000,
        );
    }, [customVisible, visible]);

    useEffect(() => {
        setDates({
            start: moment(defaultDates.startDate, 'YYYY-MM-DD'),
            end: moment(defaultDates.endDate, 'YYYY-MM-DD'),
        });
    }, [defaultDates]);

    const handleVisibleChange = flag => {
        setTimeout(
            () =>
                document.querySelectorAll('.ant-picker-cell').forEach(item => {
                    console.log(item.getAttribute('title'));
                    item.setAttribute('title', '');
                }),
            1000,
        );
        setVisible(flag);
    };

    const handlePress = () => {
        setTimeout(
            () =>
                document.querySelectorAll('.ant-picker-cell').forEach(item => {
                    console.log(item.getAttribute('title'));
                    item.setAttribute('title', '');
                }),
            1000,
        );
        onPress('customized', dates);
        setVisible(false);
    };

    const dropdownProps = {
        visible,
        onVisibleChange: handleVisibleChange,
        placement: 'bottomCenter',
        style: styles.dropdown,
        type: 'icon',
        arrow: true,
        trigger: ['click'],
        nameIcon: 'chevron-down',
    };
    return (
        <Container onMouseEnter={() => setVisible(true)}>
            {customVisible ? (
                <Dropdown
                    {...dropdownProps}
                    overlay={() => Custom({ onPress: handlePress, dates, setDates, setCustomVisible })}
                />
            ) : (
                <Dropdown {...dropdownProps} overlay={() => MenuOptions({ onPress, setCustomVisible })} />
            )}
        </Container>
    );
}

export default DropdownPeriod;
