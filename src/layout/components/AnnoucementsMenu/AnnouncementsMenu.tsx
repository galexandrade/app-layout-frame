import React from 'react';
import { IconMegaphone } from '@7shifts/sous-chef';
import NotificationBadge from '../NotificationBadge';
import NavButton from '../NavButton';

const AnnouncementsMenu = (): JSX.Element => {
    const unreadAnnouncementsCount = 2;

    const isBadged = Number(unreadAnnouncementsCount) > 0;
    const onClick = () => {
        console.log('Click');
    };
    return (
        <NavButton tooltipContent="Announcements" onClick={() => onClick()}>
            <div
                data-product-tour-target="connect_with_my_team"
                data-testid="announcements-open-button"
                className="announcements-menu"
            >
                <IconMegaphone color="grey-400" />
                {isBadged && (
                    <NotificationBadge>
                        {unreadAnnouncementsCount}
                    </NotificationBadge>
                )}
            </div>
        </NavButton>
    );
};

export default AnnouncementsMenu;
