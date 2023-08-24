import React from 'react';
import classNames from 'classnames';
import './primary-nav-item.scss';
import { Inline } from '@7shifts/sous-chef';

type Props = {
    as?: 'div' | 'li';
    isActive?: boolean;
    children: React.ReactNode;
};

const PrimaryNavItem = ({ as = 'li', isActive = false, children }: Props) => {
    const props = {
        className: classNames('primary-nav-item', {
            'primary-nav-item--active': isActive
        })
    };

    const content = (
        <Inline alignItems="center" space={16} flex={['0 1 auto', '0 0 142px']}>
            {children}
        </Inline>
    );

    return React.createElement(as, props, content);
};

export default PrimaryNavItem;
