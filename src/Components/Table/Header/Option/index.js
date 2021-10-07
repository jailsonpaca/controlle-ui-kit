import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'Components';
import { COLORS } from 'styles';
import { BtnAction } from './styles';

const Option = ({ title, onClick, isShowColumns }) => (
    <BtnAction type="link" onClick={() => onClick()} isShowColumns={isShowColumns}>
        <Text.Regular size={13} color={COLORS.blueGrey}>
            {title}
        </Text.Regular>
    </BtnAction>
);

Option.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
};

Option.defaultProps = {
    title: '',
    onClick: () => null,
};

export default Option;
