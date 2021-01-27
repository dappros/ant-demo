import React from 'react';
import { Link } from 'react-router-dom';

import { svgPlanet, svgRating, svgLetter, svgSettings, svgMessages, svgNotes, svgArrowBarLeft } from './svgComponents'

import './../../App.css';

function SideMenu({ activePage, setActivePage, toggle, setToggle, formStatus, activeAccount }) {

    const toggleAsideClassName = () => {
        if (!toggle) {
            return 'main-sidebar px-0 col-12 col-md-3 col-lg-2'
        } else {
            return 'main-sidebar px-0 col-12 col-md-3 col-lg-2 open'
        }
    }

    const sideMenuToggle = () => {
        setToggle(!toggle)
    }

    const checkActivePages = (sideMenuTitle) => {

        if (activePage === sideMenuTitle) {
            return 'nav-link text-left active'
        } else {
            return 'nav-link text-left'
        }

    }

    const activePageHandler = (activePage) => {
        setActivePage(activePage)
        setToggle(false)
    }

    return (
        <aside className={toggleAsideClassName()}>
            <div className="main-navbar">
                <nav className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0 navbar navbar-light mainTitle">
                    <button href="#" className="w-100 mr-0 navbar-brand text-decoration-none">

                        <div className='d-flex'>
                            <span>ANT</span>
                        </div>
                    </button>
                    <button
                        onClick={() => sideMenuToggle()}
                        aria-controls="navbarTogglerDemo01"
                        className="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                        {svgArrowBarLeft}
                    </button>
                </nav>
            </div>
            <div className="nav-wrapper sideMenu">
                <ul className="nav--no-borders flex-column nav">
                    <Link to="/maritech/dashboard/">
                        <li className="nav-item p-0">
                            <button
                                className={checkActivePages('Dashboard')}
                                href="#"
                                onClick={() => activePageHandler('Dashboard')}
                            >
                                {svgRating} Dashboard
                        </button>
                        </li>
                    </Link>

                    <Link to="/maritech/negotiations/">
                        <li className="nav-item p-0">
                            <button
                                className={checkActivePages('NewNegotiation')}
                                href="#"
                                onClick={() => activePageHandler('NewNegotiation')}
                            >
                                {svgLetter} Open Negotiations
                                {activeAccount === 'Alice' && (formStatus === "ACCEPTED with Alice's updates" || formStatus === 'counteroffer by Bob')
                                    ? <div className="newUpdates"></div>
                                    : null
                                }
                                {activeAccount === 'Bob' && (formStatus === "ACCEPTED with Bob's updates" || formStatus === 'counteroffer by Alice' || formStatus === 'Proposed')
                                    ? <div className="newUpdates"></div>
                                    : null
                                }
                            </button>
                        </li>
                    </Link>

                    <li className="nav-item p-0">
                        <button className="nav-link text-left" href="#">
                            {svgNotes} Negotiations History
                        </button>
                    </li>

                    <li className="nav-item p-0">
                        <button className="nav-link text-left" href="#">
                            {svgMessages} Chat Room
                        </button>
                    </li>

                    <li className="nav-item p-0">
                        <button className="nav-link text-left" href="#">
                            {svgPlanet} Help Center
                        </button>
                    </li>

                    <li className="nav-item p-0">
                        <button className="nav-link text-left" href="#">
                            {svgSettings} Settings
                        </button>
                    </li>
                </ul>
            </div>
        </aside >
    );
}

export default SideMenu;