import React from 'react';

const AnchorLink = ({ href, offset = 0, children, className }) => {
    const handleClick = (e) => {
        e.preventDefault(); 
        const target = document.querySelector(href); 
        if (target) {
            const topPosition = target.offsetTop - offset; 
            window.scrollTo({
                top: topPosition,
                behavior: 'smooth', 
            });
        }
    };

    return (
        <a href={href} className={className} onClick={handleClick}>
            {children}
        </a>
    );
};

export default AnchorLink;
