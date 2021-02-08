import React from 'react';
import { v4 as uuidv4 } from 'uuid'

const Header = () => {
    const link_name_list = ['Reddit', 'Stocktwits', 'Discord', 'All', 'About', 'Inquire']
    const nav_links = link_name_list.map(link_name => (
        <a className="p-2 text-muted" href={`/${link_name}`} key={uuidv4()}>{link_name}</a>
    ))
    return (
        <div className="container">
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1"><a className="text-muted" href="#subscribe">Subscribe to Alerts</a></div>
                    <div className="col-4 text-center"><a className="blog-header-logo text-dark" href="#home">Stonks Alert</a></div>
                    <div className="col-4 d-flex justify-content-end align-items-center"></div>
                </div>
            </header>
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    {nav_links}
                </nav>
            </div>
            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">"Check out these sweet gains, bro"</h1>
                    <p className="lead my-3"> - IDK Abe Lincoln probably</p>
                </div>
            </div>
        </div>
    );
};

export default Header;