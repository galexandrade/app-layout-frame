// @ts-strict-ignore
import React from 'react';
import { NavBarItemGroup } from '../../types';
import { Link } from 'react-router-dom';
import { IconAward } from '@7shifts/sous-chef';
import { useState } from 'react';
import PrimaryNavItem from '../PrimaryNavItem';
import SecondaryNavItem from '../SecondaryNavItem';
import NotificationBadge from '../NotificationBadge';
import styles from './side-nav-menu-item-group.scss';

type Props = {
    isExpanded: boolean;
    toggleExpand?: () => void;
    item: NavBarItemGroup;
};

const SideNavMenuItemGroup = ({ isExpanded, toggleExpand, item }: Props) => {
    const { label, badge } = item;
    const hasActiveSubmenu = Boolean(item.items.find((item) => item.isActive));
    const [isSubmenuExpanded, setIsSubmenuExpanded] = useState(
        !!hasActiveSubmenu
    );

    // sorts paywalled navBarItems to bottom of submenu
    const sortedNavBarItems = item.items.sort(
        (itemA, itemB) =>
            Number(itemA.isPaywalled || false) -
            Number(itemB.isPaywalled || false)
    );

    const Icon = item.icon;
    return (
        <li className={styles['side-nav-menu-item-group']}>
            <Link
                to={item.url || item.items[0].url}
                key={label}
                onClick={() => {
                    if (!isExpanded && hasActiveSubmenu && toggleExpand) {
                        toggleExpand();
                        setIsSubmenuExpanded(true);
                        return;
                    }

                    if (!isSubmenuExpanded || hasActiveSubmenu) {
                        setIsSubmenuExpanded(!isSubmenuExpanded);
                    }
                }}
            >
                <PrimaryNavItem as="div" isActive={hasActiveSubmenu}>
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
            {isExpanded && hasActiveSubmenu && (
                <ul className={styles['side-nav-menu-item-group__submenu']}>
                    {sortedNavBarItems.map((subMenuItem) => (
                        <Link
                            to={subMenuItem.url}
                            key={subMenuItem.label}
                            onClick={() => {
                                if (subMenuItem.onClick) {
                                    subMenuItem.onClick();
                                }
                            }}
                        >
                            <SecondaryNavItem
                                isActive={subMenuItem.isActive}
                                badge={subMenuItem.badge}
                                icon={
                                    subMenuItem.isPaywalled ? (
                                        <IconAward
                                            size="medium"
                                            color="eggplant-500"
                                        />
                                    ) : undefined
                                }
                            >
                                {subMenuItem.label}
                            </SecondaryNavItem>
                        </Link>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default SideNavMenuItemGroup;
