import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

//Styles
import './Shards.css';
import './App.css';

//Components
import Header from './components/Header/Header.jsx';
import SideMenu from './components/Side Menu/SideMenu.jsx';

//Pages
import Login from './pages/Log-In/Login.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import NewNegotiation from './pages/New Negotiation/NewNegotiation.jsx';

function App() {
    const useLocalStorageList = (key, defaultValue) => {
        const stored = localStorage.getItem(key);
        const initial = stored ? JSON.parse(stored) : defaultValue;
        const [value, setValue] = useState(initial);

        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(value));
            checkQuery();
        }, [key, value]);

        return [value, setValue];
    };

    const [activeAccount, setActiveAccount] = useLocalStorageList('Account Name', 'Alice');
    const [formStatus, setFormStatus] = useLocalStorageList('Form Status', null);
    const [activePage, setActivePage] = useLocalStorageList('Active Page', 'Dashboard');

    const [toggle, setToggle] = useState(false);

    // function for enter in offer interface, when Bob click on link in email
    const checkFormStatus = () => {
        if (formStatus !== null && formStatus !== 'counteroffer by Bob') {
            setActiveAccount('Bob');
        } else {
            setActiveAccount('Alice');
        }
    };

    // component did mount
    useEffect(() => {
        checkFormStatus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const checkQuery = () => {
        const queryString = window.location.href;
        if (queryString.split('/').includes('offer')) {
            setActiveAccount('Bob');
        }
        if (queryString.split('/').includes('response')) {
            setActiveAccount('Alice');
        }
    };

    return (
        <div>
            <Route path="/ant-demo/" exact>
                <Login setActiveAccount={setActiveAccount} />
            </Route>

            <Route path="/ant-demo/dashboard" exact>
                <div className="container-fluid">
                    <div className="row">
                        <SideMenu
                            toggle={toggle}
                            setToggle={setToggle}
                            activePage={activePage}
                            setActivePage={setActivePage}
                            formStatus={formStatus}
                            activeAccount={activeAccount}
                        />
                        <main className="main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2">
                            <Header
                                activeAccount={activeAccount}
                                setActiveAccount={setActiveAccount}
                                toggle={toggle}
                                setToggle={setToggle}
                            />
                            <Dashboard activeAccount={activeAccount} />
                        </main>
                    </div>
                </div>
            </Route>

            <Route path="/ant-demo/negotiations/" exact>
                <div className="container-fluid">
                    <div className="row">
                        <SideMenu
                            toggle={toggle}
                            setToggle={setToggle}
                            activePage={activePage}
                            setActivePage={setActivePage}
                            formStatus={formStatus}
                            activeAccount={activeAccount}
                        />
                        <main className="main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2">
                            <Header
                                activeAccount={activeAccount}
                                setActiveAccount={setActiveAccount}
                                toggle={toggle}
                                setToggle={setToggle}
                            />
                            <NewNegotiation
                                activeAccount={activeAccount}
                                setActiveAccount={setActiveAccount}
                                formStatus={formStatus}
                                setFormStatus={setFormStatus}
                            />
                        </main>
                    </div>
                </div>
            </Route>
        </div>
    );
}

export default App;
