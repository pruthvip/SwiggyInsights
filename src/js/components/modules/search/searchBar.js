import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="card search-bar">
                  <header className="card-header">
                    <p className="card-header-title">
                      Search Maadi!!
                    </p>
                    <a className="card-header-icon">
                      <span className="icon">
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </a>
                  </header>
                  <div className="card-content">
                    <div className="field">
                        <label className="label">Cities</label>
                        <p className="control has-icons-left has-icons-right">
                          <input className="input is-success" type="text" placeholder="Text input" value="bulma" />
                          <span className="icon is-small is-left">
                            <i className="fa fa-user"></i>
                          </span>
                          <span className="icon is-small is-right">
                            <i className="fa fa-check"></i>
                          </span>
                        </p>
                        <p className="help is-success">This username is available</p>
                  </div>
                </div>
            </div>
        </div>
        );
    }
}
