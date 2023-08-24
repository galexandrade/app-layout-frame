import React from 'react';
import AnnouncementsMenu from '../AnnoucementsMenu';
import Brand from '../Brand/Brand';
import MyAccountMenu from '../MyAccountMenu/MyAccountMenu';
import './top-bar.scss';
import { Inline } from '@7shifts/sous-chef';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div>
                <Brand />
            </div>
            <Inline space={24} alignItems="center">
                <Inline space={12} alignItems="center">
                    <AnnouncementsMenu />
                </Inline>
                <MyAccountMenu />
            </Inline>
        </div>
    );
};

export default TopBar;
