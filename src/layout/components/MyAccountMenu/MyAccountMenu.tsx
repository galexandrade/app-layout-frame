import React from 'react';
import {
    Avatar,
    Dropdown,
    DropdownList,
    DropdownListItem
} from '@7shifts/sous-chef';
import './my-account-menu.scss';

const MyAccountMenu = () => {
    const trigger = (
        <div className="my-account-menu">
            <Avatar
                size="large"
                url="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg"
            />
        </div>
    );

    return (
        <Dropdown trigger={trigger} triggersOn="hover" zIndex={6}>
            <DropdownList>
                <DropdownListItem href="/employees">
                    My account
                </DropdownListItem>
                <DropdownListItem href="/employees">Log out</DropdownListItem>
            </DropdownList>
        </Dropdown>
    );
};

export default MyAccountMenu;
