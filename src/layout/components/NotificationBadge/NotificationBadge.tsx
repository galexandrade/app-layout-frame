import React from 'react';
import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './notification-badge.scss';
import { Badge } from '@7shifts/sous-chef';

type Props = {
    isExpanded: boolean;
    children?: ReactNode;
};

const NotificationBadge = ({ isExpanded, children }: Props): JSX.Element => {
    return (
        <div
            className={classNames(styles['notification-badge'], {
                [styles['notification-badge--count-expanded']]: isExpanded,
                [styles['notification-badge--count-closed']]: !isExpanded
            })}
        >
            <Badge>{children}</Badge>
        </div>
    );
};

export default NotificationBadge;
