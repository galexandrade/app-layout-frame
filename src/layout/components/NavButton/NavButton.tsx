import React from 'react';
import { Tooltip } from '@7shifts/sous-chef';
import './nav-button.scss';

type props = {
    children: React.ReactNode;
    tooltipContent: string;
    onClick: () => void;
};

const NavButton = ({
    children,
    tooltipContent,
    onClick
}: props): JSX.Element => {
    return (
        <Tooltip overlay={tooltipContent}>
            <button
                className="nav-button"
                tabIndex={0}
                onClick={() => onClick()}
            >
                {children}
            </button>
        </Tooltip>
    );
};

export default NavButton;
