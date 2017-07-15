import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
    }


    renderCityDropDown() {
        const cityListClassNames = ['select', 'is-success', 'w100'];

        if (this.props.cityApiStatus.inProgress) {
            cityListClassNames.push('is-loading');
        }

        return (
            <span className={cityListClassNames.join(' ')}>
              <select className="w100">
                {this.props.cityList && this.props.cityList.map((city, i) => {
                    return (
                        <option key={i}>{city.value}</option>
                    )
                })}
              </select>
            </span>
        );
    }

    render() {
        return (
            <div className="box">
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
                          <label className="label">City</label>
                          <p className="control">
                            {this.renderCityDropDown()}
                          </p>
                      </div>
                    <div className="field">
                        <label className="label">Area</label>
                        <p className="control">
                          <span className="select is-success w100">
                            <select className="w100">
                              <option>Select dropdown</option>
                              <option>With options</option>
                            </select>
                          </span>
                        </p>
                    </div>

                    <div className="separator"><span className="separator__text">OR</span></div>

                    <div className="field">
                        <label className="label">Cuisine</label>
                        <p className="control">
                          <span className="select is-success w100">
                            <select className="w100">
                              <option>Select dropdown</option>
                              <option>With options</option>
                            </select>
                          </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
