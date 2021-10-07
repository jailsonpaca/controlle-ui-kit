import styled from 'styled-components';
import { Menu as MenuAnt, Form } from 'antd';
import { COLORS } from 'styles';

export default {
    payButton: {
        width: 203,
        height: 34,
        paddingTop: 5,
        paddingBottom: 5,
    },
    cancelButton: {
        width: 203,
    },
    datePicker: {
        width: 203,
    },
    dropdown: {
        height: 220,
    },
    popover: { zIndex: 1051, boxShadow: '1px -1px 15px 5px rgba(0,0,0,0.2)' },
};

export const Menu = styled(MenuAnt)`
    width: 220px;
    padding: 15px 0;
    li {
        width: 100%;
        padding: 5px 25px;
        color: ${COLORS.textMenuDropDown};
        span {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;
export const Container = styled.div`
    max-width: 20px;
    margin: auto;
    padding: 4px 2px;
`;

export const CustomContainer = styled.div`
    background-color: ${COLORS.white};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0px 40px;
    padding-top: 40px;
    padding-bottom: 65px;
    width: 238px;
    height: 220px;
    z-index: 1051;
    border-radius: 4px;
`;

export const FormItem = styled(Form.Item)`
    width: 203px;
    margin-bottom: 11px;
    &:first-of-type {
        padding-top: 40px;
    }
`;
