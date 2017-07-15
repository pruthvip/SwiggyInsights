import React from 'react';

export default function () {
    return (
      <nav className="nav is-dark has-shadow app-header" id="top">
    <div className="container">
      <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div className="nav-right nav-menu is-hidden-tablet">
        <a className="nav-item is-tab is-active">
          Dashboard
        </a>
        <a className="nav-item is-tab">
          Activity
        </a>
        <a className="nav-item is-tab">
          Timeline
        </a>
        <a className="nav-item is-tab">
          Folders
        </a>
      </div>
    </div>
  </nav>
    );
}
