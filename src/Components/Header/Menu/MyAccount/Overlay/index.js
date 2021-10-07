/* eslint-disable react/prop-types */
import React from 'react';
import UserContent from './UserContent';
import MyAccountMenu from './Menu';

const MyAccountOverlay = ({ onShowDrawer, ...othersProps }) => (
    <>
        <UserContent />
        <MyAccountMenu onShowDrawer={onShowDrawer} {...othersProps} />
    </>
);

export default MyAccountOverlay;
