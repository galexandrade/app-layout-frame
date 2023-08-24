import React from 'react';
import type { ReactElement } from 'react';
import { IconComment } from '@7shifts/sous-chef';
import NavButton from '../NavButton';
import NotificationBadge from '../NotificationBadge';
const MessagingMenu = (): ReactElement => {
    const unreadMessagesCount = 2;
    const isBadged = unreadMessagesCount > 0;

    const onClick = () => {
        console.log('Clicked');
    };
    return (
        <NavButton tooltipContent="Messages" onClick={() => onClick()}>
            <div id="messaging-open" data-testid="messaging-icon">
                <IconComment color="grey-400" />
                {isBadged && (
                    <NotificationBadge>{unreadMessagesCount}</NotificationBadge>
                )}
            </div>
        </NavButton>
    );
};

export default MessagingMenu;
