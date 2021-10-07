import styled from 'styled-components';
import { Button as AntdButton } from 'antd';
import { COLORS } from 'styles';

export default {
    icon: {
        color: COLORS.blueGreyTwo,
        fontSize: 24,
    },
    tinyLeftIcon: {
        fontSize: 18,
        paddingTop: 0,
        paddingBottom: 2,
        paddingRight: 2,
        paddingLeft: 0,
    },
    tinyRightIcon: {
        fontSize: 18,
        paddingTop: 0,
        paddingBottom: 2,
        paddingRight: 0,
        paddingLeft: 2,
    },
    iconLeft: {
        paddingTop: 2,
        paddingRight: 4,
    },
    iconRight: {
        paddingTop: 2,
        paddingLeft: 4,
    },
};

export const Button = styled(AntdButton)`
    position: absolute;
    ${props => (props.direction === 'left' ? 'left: 24px;' : 'right: 24px;')};
    top: 74%;
    border: none;
    width: 30px;
    height: 30px;
    box-shadow: 0 2px 3px 0 rgba(45, 65, 95, 0.1);
`;
