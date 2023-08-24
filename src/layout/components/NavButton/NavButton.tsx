import React from 'react';
import { Tooltip } from '@7shifts/sous-chef';
import styles from './nav-button.scss';
import NotificationBadge from '../NotificationBadge/NotificationBadge';

type props = {
    children: React.ReactNode;
    tooltipContent: string;
    badge?: number | boolean;
    onClick: () => void;
};

const NavButton = ({
    children,
    tooltipContent,
    badge = false,
    onClick
}: props): JSX.Element => {
    return (
        <Tooltip overlay={tooltipContent}>
            <button
                className={styles['nav-button']}
                tabIndex={0}
                onClick={() => onClick()}
            >
                {children}
                {!!badge && <NotificationBadge>{badge}</NotificationBadge>}
            </button>
        </Tooltip>
    );
};

export default NavButton;
