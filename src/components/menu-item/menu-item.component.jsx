import React from "react";
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, emoji, size }) => (
    <div className={`${size} menu-item`}>
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{ title.toUpperCase() }<span className='emoji' role="img" aria-label={title}>{ emoji }</span></h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;