import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'Components';
import { COLORS } from 'styles';
import { Collapse } from 'antd';
import FeatherIcon from 'feather-icons-react';
import styles from './styles';

const { Panel } = Collapse;

const getIcon = (isActive, styleHeader) =>
    isActive ? (
        <FeatherIcon icon="minus" style={{ ...styles.iconExpanded, ...styleHeader }} />
    ) : (
        <FeatherIcon icon="plus" style={{ ...styles.iconExpanded, ...styleHeader }} />
    );

const ExtraOptions = ({
    active,
    bordered,
    titleHeader,
    titleExpanded,
    children,
    styleCollapse,
    stylePanel,
    styleHeader,
    headerBold,
}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <Collapse
            {...(active && { activeKey: '1' })}
            bordered={bordered}
            onChange={() => setIsActive(!isActive)}
            expandIcon={({ isActive: newState }) => getIcon(newState, styleHeader)}
            style={{ ...styles.collapse, ...styleCollapse }}
        >
            <Panel
                header={
                    headerBold ? (
                        <Text.Bold size={14} color={COLORS.primary} style={styleHeader}>
                            {titleExpanded !== null && isActive ? titleExpanded : titleHeader}
                        </Text.Bold>
                    ) : (
                        <Text.Regular size={14} color={COLORS.primary} style={styleHeader}>
                            {titleExpanded !== null && isActive ? titleExpanded : titleHeader}
                        </Text.Regular>
                    )
                }
                key="1"
                style={{ ...styles.panel, ...stylePanel }}
            >
                {children}
            </Panel>
        </Collapse>
    );
};

ExtraOptions.propTypes = {
    active: PropTypes.bool,
    bordered: PropTypes.bool,
    styleCollapse: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    stylePanel: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    styleHeader: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    children: PropTypes.node,
    headerBold: PropTypes.bool,
    titleHeader: PropTypes.string,
    titleExpanded: PropTypes.string,
};

ExtraOptions.defaultProps = {
    active: false,
    bordered: false,
    headerBold: false,
    styleCollapse: {},
    stylePanel: {},
    styleHeader: {},
    titleExpanded: 'Esconder opções',
};

export default ExtraOptions;
