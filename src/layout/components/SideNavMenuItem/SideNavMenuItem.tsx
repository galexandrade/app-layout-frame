// @ts-strict-ignore
import React from 'react';
import { NavBarItem } from '../../types';
import { Link } from 'react-router-dom';
import PrimaryNavItem from '../PrimaryNavItem';
import NotificationBadge from '../NotificationBadge';

type Props = {
    isExpanded: boolean;
    item: NavBarItem;
};

const SideNavMenuItem = ({ isExpanded, item }: Props) => {
    const { url, label, isActive, badge } = item;
    const Icon = item.icon;
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
                        {(badge as number) > 0 ? (
                            <NotificationBadge />
                        ) : undefined}
                    </React.Fragment>
                )}
                {isExpanded && label}
            </PrimaryNavItem>
        </Link>
    );
};

export default SideNavMenuItem;
