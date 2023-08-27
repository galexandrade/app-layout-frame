import React, { useLayoutEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './layout-frame.scss';
import useLocalStorage from '../../util/useLocalStorage';
import { NAV_POSITION, NAV_SIZE } from '../../constants';
import { isTouchscreen } from '../../util/mobileDetect';
import { NavBarItems } from '../../types';
import SideNavBar from '../SideNavBar/SideNavBar';
import TopBar from '../TopBar/TopBar';

type Props = {
    navItems: NavBarItems;
    appLogo: React.ReactNode;
    accountMenuDropdown: React.ReactNode;
    actions: React.ReactNode[];
    companyLogoURL?: string;
    companyName: string;
    userPrifileImageURL: string;
    banner?: React.ReactNode;
    children?: React.ReactNode;
};

const LayoutFrame = ({
    navItems,
    appLogo,
    actions,
    companyLogoURL,
    companyName,
    userPrifileImageURL,
    accountMenuDropdown,
    banner,
    children
}: Props) => {
    const navRef = useRef<HTMLDivElement>(null);
    const bannerRef = useRef<HTMLDivElement>(null);
    const [bannerHeight, setBannerHeight] = useState(45);

    useLayoutEffect(() => {
        if (bannerRef && bannerRef.current) {
            setBannerHeight(bannerRef.current.clientHeight);
        }
    });

    const isFullScreen = false;
    const [isExpanded, setIsExpanded] = useLocalStorage<boolean>(
        'vertical-nav-is-expanded',
        true
    );
    const [isHovering, setIsHovering] = useState(false);

    const toggleExpand = () => {
        //@ts-ignore
        setIsExpanded(!isExpanded);
        if (isExpanded && navRef) {
            setIsHovering(false);
        }
    };

    const isTouchDevice = isTouchscreen();
    const isShowingSideMenu = !isFullScreen;

    return (
        <div className={styles['layout-frame']}>
            {isShowingSideMenu && (
                <div
                    ref={navRef}
                    className={classNames(styles['layout-frame__side-bar'], {
                        [styles['layout-frame__side-bar--expanded']]:
                            isExpanded,
                        [styles['layout-frame__side-bar--collapsed']]:
                            !isExpanded,
                        [styles['layout-frame__side-bar--with-banner']]:
                            !!banner
                    })}
                    onMouseEnter={() => {
                        !isTouchDevice && setIsHovering(true);
                    }}
                    onMouseLeave={() => {
                        !isTouchDevice && setIsHovering(false);
                    }}
                    style={{
                        width:
                            isExpanded || isHovering
                                ? NAV_SIZE.EXPANDED
                                : NAV_SIZE.COLLAPSED,
                        paddingTop: !!banner ? bannerHeight : 0
                    }}
                >
                    <SideNavBar
                        isHovering={isHovering}
                        navPosition={
                            isExpanded
                                ? NAV_POSITION.EXPANDED
                                : NAV_POSITION.COLLAPSED
                        }
                        toggleExpand={toggleExpand}
                        navItems={navItems}
                        appLogo={appLogo}
                    />
                </div>
            )}

            <div
                className={classNames(styles['layout-frame__middle-area'], {
                    [styles['layout-frame__middle-area--full-size']]:
                        !isShowingSideMenu
                })}
            >
                {banner && (
                    <div
                        ref={bannerRef}
                        className={classNames(styles['layout-frame__banner'], {
                            [styles['layout-frame__banner--expanded']]:
                                isExpanded
                        })}
                    >
                        {banner}
                    </div>
                )}
                {!isFullScreen && (
                    <div className={styles['layout-frame__top-bar']}>
                        <TopBar
                            companyLogoURL={companyLogoURL}
                            companyName={companyName}
                            actions={actions}
                            userPrifileImageURL={userPrifileImageURL}
                            accountMenuDropdown={accountMenuDropdown}
                        />
                    </div>
                )}
                <div className={styles['layout-frame__content']}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LayoutFrame;
