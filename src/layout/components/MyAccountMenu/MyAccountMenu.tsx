import React from 'react';
import { Avatar, Dropdown } from '@7shifts/sous-chef';
import styles from './my-account-menu.scss';

type Props = {
    accountMenuDropdown: React.ReactNode;
    userPrifileImageURL: string;
};

const MyAccountMenu = ({ accountMenuDropdown, userPrifileImageURL }: Props) => {
    const trigger = (
        <div className={styles['my-account-menu']}>
            <Avatar size="large" url={userPrifileImageURL} />
        </div>
    );

    return (
        <Dropdown trigger={trigger} triggersOn="hover" zIndex={6}>
            {accountMenuDropdown}
        </Dropdown>
    );
};

export default MyAccountMenu;
