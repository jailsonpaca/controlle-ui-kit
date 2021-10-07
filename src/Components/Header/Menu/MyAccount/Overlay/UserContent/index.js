import React from 'react';
import { useSelector } from 'react-redux';
import { Text } from 'Components';
import FeatherIcon from 'feather-icons-react';
import { Avatar, UserContainer } from './styles';

const UserContent = () => {
    const user = useSelector(state => state.user.profile);

    return (
        <UserContainer>
            <Avatar icon={<FeatherIcon icon="aperture" />} />
            <Text.Bold size={14}>{user && user.name}</Text.Bold>
        </UserContainer>
    );
};

export default UserContent;
