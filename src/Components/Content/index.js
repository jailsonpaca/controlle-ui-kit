import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button, NavigationArrow } from 'Components';
import { COLORS } from 'styles';
import { Dropdown } from 'antd';
import moment from 'moment';
import DropdownPeriod from './DropdownPeriod';
import styles, { Container, Link } from './styles';

const ContentComponent = ({ isSettingsHeader, children, style = {} }) => (
    <div
        style={{
            ...styles.content,
            ...style,
            ...(isSettingsHeader && styles.settingsHeader),
        }}
    >
        {children}
    </div>
);

const Header = ({
    title,
    textSize = 22,
    textAdd = 'adicionar',
    useAdd = false,
    useHelper = false,
    useFilter = false,
    useHideFilter = false,
    useDropDownAdd = false,
    usePeriod = false,
    periodProps = {
        textPeriod: '',
        date: moment().format('YYYY-MM-DD'),
        style: {},
        onBackPeriod: () => null,
        onNextPeriod: () => null,
        useDrop: false,
        onPressPeriod: () => null,
    },
    useAction = false,
    textAction = '',
    stylesAction = {},
    colorAction = COLORS.primary,
    Menu,
    onAdd = () => null,
    onShowFilter = () => null,
    onHideFilter = () => null,
    onAction,
}) => (
    <Container usePeriod={usePeriod}>
        <Text.Bold size={textSize} color={COLORS.dark} style={styles.title}>
            {title}
        </Text.Bold>

        {useAdd && (
            <Button.Add onClick={onAdd} size="large" style={styles.buttonAdd}>
                <Text.Bold size={14} color={COLORS.white} style={styles.textAdd}>
                    + {textAdd}
                </Text.Bold>
            </Button.Add>
        )}

        {useDropDownAdd && (
            <Dropdown
                placement="bottomLeft"
                transitionName=""
                maskTransitionName=""
                overlay={() => Menu()}
                overlayStyle={{ height: 10 }}
            >
                <Button.Add size="large" style={styles.buttonAdd} onClick={onAdd}>
                    <Text.Bold size={14} color={COLORS.white} style={styles.textAdd}>
                        + adicionar
                    </Text.Bold>
                </Button.Add>
            </Dropdown>
        )}

        {useFilter && (
            <Button type="link" style={styles.linkFilter} onClick={onShowFilter}>
                <Text.Bold size={14} color={COLORS.blueGrey}>
                    Criar filtro
                </Text.Bold>
            </Button>
        )}

        {useHideFilter && (
            <Button type="link" style={styles.linkFilter} onClick={onHideFilter}>
                <Text.Bold size={14} color={COLORS.blueGrey}>
                    Esconder filtro
                </Text.Bold>
            </Button>
        )}

        {usePeriod && (
            <div style={{ ...styles.periodContainer, ...periodProps.style }}>
                <NavigationArrow tiny style={styles.navBack} direction="left" onClick={periodProps.onBackPeriod} />
                <div>
                    <Text.Bold size={16} color={COLORS.blueGrey}>
                        {periodProps.textPeriod}
                    </Text.Bold>
                </div>
                <NavigationArrow tiny style={styles.navNext} direction="right" onClick={periodProps.onNextPeriod} />
                {periodProps.useDrop && (
                    <div style={styles.full}>
                        <DropdownPeriod date={periodProps.date} onPress={periodProps.onPressPeriod} />
                    </div>
                )}
            </div>
        )}

        {useAction && (
            <Button type="link" style={{ ...styles.linkHelper, ...stylesAction }} onClick={onAction}>
                <Text.Bold size={14} color={colorAction}>
                    {textAction}
                </Text.Bold>
            </Button>
        )}

        {useHelper && (
            <Link target="_blank" href="#www" style={{ ...styles.linkHelper, ...(useAction && { marginLeft: 0 }) }}>
                Ajuda
            </Link>
        )}
    </Container>
);

ContentComponent.Header = Header;

ContentComponent.propTypes = {
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    isSettingsHeader: PropTypes.bool,
    children: PropTypes.node,
};

Header.propTypes = {
    title: PropTypes.string,
    textSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    useAdd: PropTypes.bool,
    textAdd: PropTypes.string,
    useHelper: PropTypes.bool,
    useFilter: PropTypes.bool,
    useHideFilter: PropTypes.bool,
    useDropDownAdd: PropTypes.bool,
    usePeriod: PropTypes.bool,
    periodProps: PropTypes.shape({
        textPeriod: PropTypes.string,
        date: PropTypes.shape({ startDate: PropTypes.string, endDate: PropTypes.string }),
        style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
        onBackPeriod: PropTypes.func,
        onNextPeriod: PropTypes.func,
        useDrop: PropTypes.bool,
        onPressPeriod: PropTypes.func,
    }),
    useAction: PropTypes.bool,
    textAction: PropTypes.string,
    colorAction: PropTypes.string,
    Menu: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    onAdd: PropTypes.func,
    onShowFilter: PropTypes.func,
    onHideFilter: PropTypes.func,
    onAction: PropTypes.func,
};

export default ContentComponent;
