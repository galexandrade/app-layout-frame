import React from 'react';
import type { ReactElement } from 'react';
import { COLORS, IconComment } from '@7shifts/sous-chef';
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
                <IconComment color={COLORS['surface-on-color-subtle']} />
                {isBadged && (
                    <NotificationBadge isExpanded={false}>
                        {unreadMessagesCount}
                    </NotificationBadge>
                )}
            </div>
        </NavButton>
    );
};

export default MessagingMenu;
