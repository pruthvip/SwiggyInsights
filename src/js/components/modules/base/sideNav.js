import React from 'react';
import Logo from '../../../../img/logo.png';

export default function () {
    const sideNavItems = [
        {
            id: 1,
            text: 'Area Insights',
            href: ''
        }
    ];

    /**
     * Renders sideNavItems
     * @return {[type]} [description]
     */
    function renderSideMenu() {
        return (
            <ul className="menu-list">
                {
                    sideNavItems.map((item, i) => {
                        return (
                            <li>
                                <a className="is-active">{item.text}</a>
                                <ul>
                                    {
                                        item.children && item.children.map((childItem, j) => {
                                            return (
                                                <li>
                                                    <a>{childItem.text}</a>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

    return (
        <aside className="menu aside hero is-hidden-mobile app-sideNav">
            <div className="app-sideNav__scroll-ctn">
                <div className="app-sideNav__logo">
                    <a href="../index.html">
                        <img src={Logo} alt="Description" />
                        Insights
                    </a>
                </div>
                <div className="app-sideNav__content">
                    {renderSideMenu()}
                </div>
            </div>
        </aside>
    );
}
