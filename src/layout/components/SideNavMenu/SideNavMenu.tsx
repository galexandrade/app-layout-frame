import React from 'react';
import styles from './side-nav-menu.scss';
import { NavBarItems } from '../../types';
import SideNavMenuItemGroup from '../SideNavMenuItemGroup/SideNavMenuItemGroup';
import SideNavMenuItem from '../SideNavMenuItem/SideNavMenuItem';

type Props = {
    isExpanded: boolean;
    toggleExpand?: () => void;
    navItems: NavBarItems;
};

const SideNavMenu = ({ isExpanded, toggleExpand, navItems }: Props) => {
    return (
        <ul className={styles['side-nav-menu']}>
            {navItems.map((item, index) => {
                if ('type' in item) {
                    return (
                        <div
                            key={index}
                            className={styles['side-nav-menu__divider']}
                        />
                    );
                }
                if ('items' in item) {
                    return (
                        <SideNavMenuItemGroup
                            key={item.label}
                            isExpanded={isExpanded}
                            item={item}
                            toggleExpand={toggleExpand}
                        />
                    );
                }

                return (
                    <SideNavMenuItem
                        key={item.label}
                        isExpanded={isExpanded}
                        item={item}
                    />
                );
            })}
        </ul>
    );
};

export default SideNavMenu;
