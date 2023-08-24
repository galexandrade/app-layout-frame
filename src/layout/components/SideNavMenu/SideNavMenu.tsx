import React from 'react';
import { useNavItems } from '../../hooks/useNavItems';
import './side-nav-menu.scss';
import { NavBarItems } from '../../types';
import SideNavMenuItemGroup from '../SideNavMenuItemGroup/SideNavMenuItemGroup';
import SideNavMenuItem from '../SideNavMenuItem/SideNavMenuItem';

type Props = {
    isExpanded: boolean;
    toggleExpand?: () => void;
};

const SideNavMenu = ({ isExpanded, toggleExpand }: Props) => {
    return (
        <SideNavMenuApp isExpanded={isExpanded} toggleExpand={toggleExpand} />
    );
};

type SideNavMenuListProps = {
    isExpanded: boolean;
    toggleExpand?: () => void;
    navItems: NavBarItems;
};

const SideNavMenuList = ({
    isExpanded,
    toggleExpand,
    navItems
}: SideNavMenuListProps) => {
    return (
        <ul className="side-nav-menu">
            {navItems.map((item, index) => {
                if ('type' in item) {
                    return (
                        <div key={index} className="side-nav-menu__divider" />
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

const SideNavMenuApp = ({
    isExpanded,
    toggleExpand
}: Omit<SideNavMenuListProps, 'navItems'>) => {
    const navItems = useNavItems();

    return (
        <SideNavMenuList
            isExpanded={isExpanded}
            toggleExpand={toggleExpand}
            navItems={navItems}
        />
    );
};

export default SideNavMenu;
