import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './layout-frame.scss';
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
            className={classNames(styles['layout-frame'], {
                [styles['layout-frame--no-height']]: isLegacyPage
            })}
        >
            {isShowingSideMenu && (
                <div
                    ref={navRef}
                    className={classNames(styles['layout-frame__side-bar'], {
                        [styles['layout-frame__side-bar--expanded']]:
                            isExpanded,
                        [styles['layout-frame__side-bar--collapsed']]:
                            !isExpanded
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
                className={classNames(styles['layout-frame__middle-area'], {
                    [styles['layout-frame__middle-area--full-size']]:
                        !isShowingSideMenu,
                    [styles['layout-frame__middle-area--no-footer-padding']]:
                        isLegacyPage
                })}
            >
                {!isFullScreen && (
                    <div
                        className={classNames(styles['layout-frame__top-bar'], {
                            [styles['layout-frame__top-bar--hidden']]:
                                isLegacyPage
                        })}
                    >
                        {topBar}
                    </div>
                )}
                <div className={styles['layout-frame__content']}>
                    {children}
                    {!isLegacyPage && <div id="footer" />}
                </div>
            </div>
        </div>
    );
};

export default LayoutFrame;
