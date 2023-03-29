import Link from 'next/link';
import React from 'react';

const AboutBox = ({ title, detail, link, isLink = false }) => {
    return (
        <div className="aboutBox">
            <p className="aboutBoxTitle">{title}</p>
            {!isLink ? <p className="aboutBoxDetail">{detail}</p> : <Link href={link}>{link}</Link>}
        </div>
    );
}

export default AboutBox;
