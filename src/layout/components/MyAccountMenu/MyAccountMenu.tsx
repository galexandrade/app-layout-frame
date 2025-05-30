import React from 'react';
import { Avatar, Dropdown } from '@7shifts/sous-chef';
import styles from './my-account-menu.scss';

type Props = {
    accountMenuDropdown: React.ReactNode;
    userProfileImageURL: string;
};

const MyAccountMenu = ({ accountMenuDropdown, userProfileImageURL }: Props) => {
    const trigger = (
        <div className={styles['my-account-menu']}>
            <Avatar size="large" url={userProfileImageURL} />
        </div>
    );

    return (
        <Dropdown trigger={trigger} triggersOn="hover" zIndex={8}>
            {accountMenuDropdown}
        </Dropdown>
    );
};

export default MyAccountMenu;
