import React from 'react';
import './header.component.scss';

const Header = (props) => (
        <div className="header justify-content-center">
            <h1>{props.title}</h1>
            <h2>{props.subtitles}</h2>
        </div>
)

export default Header;