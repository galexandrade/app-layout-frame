import React from 'react';
import { Badge, Chip } from '@7shifts/sous-chef';
import classNames from 'classnames';
import styles from './secondary-nav-item.scss';
import { getBadgeContent } from '../../util/navDomain';

type Props = {
    isActive?: boolean;
    icon?: React.ReactNode;
    badge?: string | number;
    children: React.ReactNode;
};

const SecondaryNavItem = ({
    isActive = false,
    icon,
    badge,
    children
}: Props) => {
    const hasChip = typeof badge === 'string' && badge !== '';
    const hasBadge = typeof badge === 'number' && badge > 0;
    return (
        <li
            className={classNames(styles['secondary-nav-item'], {
                [styles['secondary-nav-item--active']]: isActive,
                [styles['secondary-nav-item--no-icon']]: !icon
            })}
        >
            {icon}
            <div className={styles['secondary-nav-item__content']}>
                {children}
                {hasBadge && <Badge>{getBadgeContent(badge)}</Badge>}
                {hasChip && <Chip>{badge}</Chip>}
            </div>
        </li>
    );
};

export default SecondaryNavItem;
