import React from 'react';
import { Avatar, Tooltip } from '@7shifts/sous-chef';
import './brand.scss';

const Brand = () => {
    return (
        <div className="brand">
            <div className="brand__company-photo">
                <Avatar
                    size="large"
                    url="https://media.istockphoto.com/id/1164466990/vector/digital-signage-pixel-icon-tech-element-vector-logo-icon-illustrator.jpg?s=612x612&w=0&k=20&c=tC_2Q7WSFbUUSDC7Nk9u-krFzDrWA4-aZjX3HI_8LoU="
                />
            </div>
            <Tooltip overlay="Company name">
                <span className="brand__company-name">
                    Clash Creative Marketing
                </span>
            </Tooltip>
        </div>
    );
};

export default Brand;
