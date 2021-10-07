/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { Menu } from 'antd';
import { Tag } from 'Components';
import { COLORS } from 'styles';

export default {
    item: { height: 23, display: 'flex', alignItems: 'center' },
    marginLeft: { paddingLeft: 45, paddingRight: 65 },
    tag: { height: 20, width: 35, backgroundColor: COLORS.lightestOrange, border: '1px solid #ff7947', paddingBottom: 10 },
    icon: { position: 'absolute', top: 3 }
};

export const MenuItem = styled(Menu.Item).withConfig({
    shouldForwardProp: prop => !['logoutItem'].includes(prop),
})`
    ${props => props.contact && 'padding-left: 24px !important'};
    ${props => props.contact && 'padding-right: 102px !important'};

    ${props => props.financial && 'padding-left: 24px !important'};
    ${props => props.financial && 'padding-right: 70px !important'};

    ${props => props.financialRight && 'padding-right: 52px !important'};

    ${props => props.solutions && 'padding-left: 24px !important'};
    ${props => props.solutions && 'padding-right: 78px !important'};

    ${props => props.solutionsRight && 'padding-right: 84px !important'};

    ${props => props.reportLeft && 'padding-left: 24px !important'};
    ${props => props.reportLeft && 'padding-right: 91px !important'};

    ${props => props.reportMid && 'padding-right: 80px !important'};

    ${props => props.reportRight && 'padding-right: 22px !important'};

    ${props => props.itemMyAccount && 'padding-left: 24px !important'};
    ${props => props.itemMyAccount && 'padding-right: 62px !important'};

    ${props => props.logoutItem && 'padding-left: 24px !important'};

    ${props => props.isSubMenuConfig && 'padding-left: 24px !important'};
    /* ${props => props.isSubMenuConfig && 'padding-right: 80px !important'}; */

    height: 25px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &:first-child {
        margin-top: 18px;
    }
    &:last-child {
        ${props => props.contact && 'margin-bottom: 18px;'};
        ${props => props.financial && 'margin-bottom:25px;'};
        ${props => props.solutions && 'margin-bottom:25px;'};
        ${props => props.reportLeft && 'margin-bottom:35px;'};
        ${props => props.logoutItem && 'margin-bottom:25px;'};

        ${props => props.isSubMenuConfig && 'margin-bottom:25px;'};
    }

    cursor: ${props => props.isFirst && 'default !important;'};

    &:hover {
        span {
            color: ${props => (props.logoutItem ? COLORS.red : !props.isFirst && COLORS.primary)}!important;
            cursor: ${props => props.isFirst && 'default !important;'}
        }
    }


`;

export const TagMenu = styled(Tag)`

    &.ant-tag {
        padding: 0 7px;
        line-height: 18px;
    }
`;
