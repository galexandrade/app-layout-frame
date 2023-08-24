import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import './layout-frame.scss';
import useLocalStorage from '../../util/useLocalStorage';
import { NAV_POSITION, NAV_SIZE } from '../../constants';
import { isTouchscreen } from '../../util/mobileDetect';

type Props = {
    sideNav?: React.ReactElement;
    topBar?: React.ReactNode;
    isLegacyPage: boolean;
    children?: React.ReactNode;
};

const LayoutFrame = ({ sideNav, topBar, isLegacyPage, children }: Props) => {
    const navRef = useRef<HTMLDivElement>(null);
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
    const isShowingSideMenu = !isFullScreen && sideNav;

    return (
        <div
            className={classNames('layout-frame', {
                'layout-frame--no-height': isLegacyPage
            })}
        >
            {isShowingSideMenu && (
                <div
                    ref={navRef}
                    className={classNames('layout-frame__side-bar', {
                        'layout-frame__side-bar--expanded': isExpanded,
                        'layout-frame__side-bar--collapsed': !isExpanded
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
                                : NAV_SIZE.COLLAPSED
                    }}
                >
                    {sideNav &&
                        React.cloneElement(sideNav, {
                            isHovering,
                            navPosition: isExpanded
                                ? NAV_POSITION.EXPANDED
                                : NAV_POSITION.COLLAPSED,
                            toggleExpand,
                            ...sideNav.props
                        })}
                </div>
            )}

            <div
                className={classNames('layout-frame__middle-area', {
                    'layout-frame__middle-area--full-size': !isShowingSideMenu,
                    'layout-frame__middle-area--no-footer-padding': isLegacyPage
                })}
            >
                {!isFullScreen && (
                    <div
                        className={classNames('layout-frame__top-bar', {
                            'layout-frame__top-bar--hidden': isLegacyPage
                        })}
                    >
                        {topBar}
                    </div>
                )}
                <div className="layout-frame__content">
                    {children}
                    {!isLegacyPage && <div id="footer" />}
                </div>
            </div>
        </div>
    );
};

export default LayoutFrame;
