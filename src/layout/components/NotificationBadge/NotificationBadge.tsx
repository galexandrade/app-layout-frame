import React from 'react';
import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './notification-badge.scss';

type Props = {
    children?: ReactNode;
};

const NotificationBadge = ({ children }: Props): JSX.Element => {
    return (
        <span
            className={classNames(styles['notification-badge'], {
                [styles['notification-badge--bullet']]:
                    typeof children === 'boolean',
                [styles['notification-badge--count']]:
                    typeof children === 'number'
            })}
            data-testid="notification-badge"
        >
            {children}
        </span>
    );
};

export default NotificationBadge;
