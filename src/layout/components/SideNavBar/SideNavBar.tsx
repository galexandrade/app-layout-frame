import React from 'react';
import { IconChevronLeft, IconChevronRight, Inline } from '@7shifts/sous-chef';
import styles from './side-nav-bar.scss';
import { NavBarItems, NavPosition } from '../../types';
import { isTouchscreen } from '../../util/mobileDetect';
import { NAV_POSITION } from '../../constants';
import SideNavMenu from '../SideNavMenu/SideNavMenu';

type Props = {
    isHovering?: boolean;
    navPosition?: NavPosition;
    toggleExpand?: () => void;
    navItems: NavBarItems;
    appLogo: React.ReactNode;
};

const SideNavBar = ({
    isHovering,
    navPosition = NAV_POSITION.COLLAPSED,
    toggleExpand,
    navItems,
    appLogo
}: Props) => {
    const isExpanded = navPosition === NAV_POSITION.EXPANDED || isHovering;
    const isTouchDevice = isTouchscreen();

    return (
        <nav className={styles['side-nav-bar']}>
            <div className={styles['side-nav-bar__header']}>
                <Inline alignItems="center" justifyContent="space-between">
                    {(!isTouchDevice || isExpanded) && (
                        <div className={styles['side-nav-bar__logo']}>
                            {appLogo}
                        </div>
                    )}
                    {(isExpanded || isTouchDevice) && (
                        <button
                            onClick={toggleExpand}
                            className={styles['side-nav-bar__nav-toggle']}
                        >
                            {navPosition === NAV_POSITION.COLLAPSED ? (
                                <IconChevronRight />
                            ) : (
                                <IconChevronLeft />
                            )}
                        </button>
                    )}
                </Inline>
            </div>
            <SideNavMenu
                isExpanded={isExpanded as boolean}
                toggleExpand={toggleExpand}
                navItems={navItems}
            />
        </nav>
    );
};

export default SideNavBar;
