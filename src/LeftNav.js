import React from 'react';

const LeftNav = () => {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item" href="/">
                        <a className="nav-link active">
                            Main Dashboard
                        </a>
                    </li>
                    <li className="nav-item" href="/">
                        <a className="nav-link active">
                            Main Dashboard
                        </a>
                    </li>
                    <li className="nav-item" href="/">
                        <a className="nav-link active">
                            Main Dashboard
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default LeftNav;