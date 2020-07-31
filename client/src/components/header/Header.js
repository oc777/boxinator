import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../logo.svg';

export function Header({title}) {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} className="App-logo" alt="logo" height="80px" width="80px" />
                <h1>{title}</h1>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/addbox'>Add Box</Link>
                    </li>
                    <li>
                        <Link to='/listboxes'>List Dispatches</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}
Header.defaultProps={
    title:'Boxinator'
};
