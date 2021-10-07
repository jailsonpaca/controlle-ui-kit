import styled from 'styled-components';

const ListItem = styled.div`
    height: 82px;
    width: 100%;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 22px;
    padding-right: 22px;
    border-radius: 3px;
    background-color: #ffffff;
    box-shadow: 0 2px 3px 0 rgba(129, 126, 150, 0.32);
    display: flex;
    margin-bottom: ${props => props.marginBottom || '24px'};
    align-items: center;
    opacity: ${props => (props.disabled ? 0.35 : 1)};
    transition: opacity 0.3s ease-in-out;
    &:hover {
        opacity: 1;
    }
`;

export default ListItem;
