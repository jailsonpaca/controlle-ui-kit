import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'Components';
import { Tooltip } from 'antd';
import { COLORS } from 'styles';
import { Container, Divider, ClipIcon } from './styles';
import './styles.less';

const AttachmentComponent = ({ name, onOpen, color, style }) => (
    <Tooltip
        placement="bottom"
        overlayClassName="tooltipAttachment"
        color={color}
        title={
            <Container style={style}>
                <Text.Bold>{name}</Text.Bold>
                <Divider type="vertical" />
                <Button.Primary type="link" onClick={onOpen}>
                    <Text.Bold color={COLORS.primary}> Abrir</Text.Bold>
                </Button.Primary>
            </Container>
        }
    >
        <ClipIcon icon="paperclip" />
    </Tooltip>
);

AttachmentComponent.propTypes = {
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    name: PropTypes.string,
    onOpen: PropTypes.func,
    color: PropTypes.string,
};

AttachmentComponent.defaultProps = {
    style: {},
    color: COLORS.white,
};

export default AttachmentComponent;
