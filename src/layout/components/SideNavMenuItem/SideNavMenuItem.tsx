// @ts-strict-ignore
import React from 'react';
import { NavBarItem } from '../../types';
import { Link } from 'react-router-dom';
import PrimaryNavItem from '../PrimaryNavItem';
import NotificationBadge from '../NotificationBadge';
import { matchPath } from 'react-router';
import { getBadgeContent } from '../../util/navDomain';
import NotificationBullet from '../NotificationBullet';

type Props = {
    isExpanded: boolean;
    item: NavBarItem;
};

const SideNavMenuItem = ({ isExpanded, item }: Props) => {
    const { url, label, badge } = item;
    const Icon = item.icon;

    const hasChip = typeof badge === 'string' && badge !== '';
    const hasBadge = typeof badge === 'number' && badge > 0;

    const isActive = !!matchPath(window.location.pathname, url);
    return (
        <Link
            to={url}
            key={label}
            onClick={(e) => {
                if (isActive) {
                    e.preventDefault();
                }
                if (item.onClick) {
                    item.onClick();
                }
            }}
        >
            <PrimaryNavItem isActive={isActive}>
                {Icon && (
                    <React.Fragment>
                        <Icon />
                        {hasBadge ? (
                            <NotificationBadge isExpanded={isExpanded}>
                                {getBadgeContent(badge)}
                            </NotificationBadge>
                        ) : hasChip ? (
                            <NotificationBullet />
                        ) : null}
                    </React.Fragment>
                )}
                {isExpanded && label}
            </PrimaryNavItem>
        </Link>
    );
};

export default SideNavMenuItem;
