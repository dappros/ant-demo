import React from 'react'

import { svgPlanet, svgSearch, svgMessages, svgBell, svgMenu } from './svgComponents'

import woman from './../../woman.jpg'
import man from './../../man.jpg'

function Header({ activeAccount, setActiveAccount, toggle, setToggle }) {

    const changeActiveAccount = () => {
        if (activeAccount === 'Alice') {
            setActiveAccount('Bob')
        } else {
            setActiveAccount('Alice')
        }
    }

    const sideMenuToggle = () => {
        setToggle(!toggle)
    }

    return (
        <header className="main-navbar bg-white sticky-top" id="aside">
            <div className="p-0 container">

                <nav className="align-items-stretch flex-md-nowrap p-0 navbar navbar-light navbar-expand-lg d-flex" id="nav">

                    <form action="" className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
                        <div className="ml-3 input-group input-group-seamless">
                            <div className="input-group-prepend d-flex">
                                <span className="input-group-text">
                                    <i className="material-icons">{svgSearch}</i>
                                </span>

                            </div>
                            <input
                                type="text"
                                id="Search"
                                placeholder='Search negotiations or help'
                                className='navbar-search form-control'
                            />
                        </div>
                    </form>

                    <ul className="border-left flex-row navbar-nav ml-auto">
                        <li className="border-right dropdown notifications nav-item d-flex">

                            <button href="#" className="nav-link-icon text-center nav-link p-0">
                                <div className="nav-link-icon__wrapper">
                                    {svgPlanet}
                                </div>
                            </button>

                            <button href="#" className="nav-link-icon text-center nav-link p-0">
                                <div className="nav-link-icon__wrapper">
                                    {svgMessages}
                                </div>
                            </button>

                            <button href="#" className="nav-link-icon text-center nav-link p-0">
                                <div className="nav-link-icon__wrapper">
                                    {svgBell}
                                </div>
                            </button>

                        </li>
                        <div className="nav-item dropdown account activeAccount">

                            <button href="#" className="text-nowrap px-3 dropdown-toggle nav-link">
                                {activeAccount === 'Alice' ? 'Alice' : 'Bob'}
                                <img src={activeAccount === 'Alice' ? woman : man} width="35px" height="35px" alt="" className="userIcon" />
                            </button>

                            <div className="collapse dropdown-menu dropdown-menu-small dropdown-menu-right nonActiveAccount"
                                tabIndex="-1"
                                role='menu'
                            >
                                <button
                                    tabIndex="0"
                                    href="#"
                                    className="dropdown-item"
                                    onClick={() => changeActiveAccount(activeAccount)}
                                >
                                    {activeAccount === 'Alice' ? 'Bob' : 'Alice'}
                                    <img src={activeAccount === 'Alice' ? man : woman} width="35px" height="35px" className="userIcon" alt="" />
                                </button>
                            </div>
                        </div>
                    </ul>

                    <nav className="nav">
                        <button onClick={() => sideMenuToggle()} href="#" className="nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-inline d-lg-none text-center">
                            {svgMenu}
                        </button>
                    </nav>
                </nav>
            </div>
        </header>
    )
}

export default Header
