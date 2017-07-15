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
              <select
                    className="w100"
                    value={this.props.selectedCityId}
                    onChange={this.props.changeCity}
                >
                {this.props.cityList && this.props.cityList.map((city, i) => {
                    return (
                        <option
                            key={i}
                            value={city.id}
                        >
                            {city.value}
                        </option>
                    )
                })}
              </select>
            </span>
        );
    }


    renderAreaDropDown() {
        const areaListClassNames = ['select', 'is-success', 'w100'];

        if (this.props.areaListApiStatus.inProgress) {
            areaListClassNames.push('is-loading');
        }

        let modifiedAreaList = [];
        if (this.props.areaList && this.props.areaList.length) {
            modifiedAreaList = this.props.areaList.map(area => {
                return area
            });

            modifiedAreaList.unshift({
                id: 0,
                value: " Select Area"
            });
        }

        return (
            <span className={areaListClassNames.join(' ')}>
              <select
                  className="w100"
                  value={this.props.selectedAreaId}
                  onChange={this.props.selectArea}
              >
                {modifiedAreaList.length && modifiedAreaList.map((area, i) => {
                    return (
                        <option
                            key={i}
                            value={area.id}
                        >
                            {area.value}
                        </option>
                    )
                })}
              </select>
            </span>
        );
    }


    renderCuisineDropdown() {
        const cuisisneListClassNames = ['select', 'is-success', 'w100'];

        if (this.props.cuisineListApiStatus.inProgress) {
            cuisisneListClassNames.push('is-loading');
        }

        let modifiedCuisineList = [];
        if (this.props.cuisineList && this.props.cuisineList.length) {
            modifiedCuisineList = this.props.cuisineList.map(area => {
                return area
            });

            modifiedCuisineList.unshift({
                id: 0,
                value: " Select Cuisine"
            });
        }

        return (
            <span className={cuisisneListClassNames.join(' ')}>
              <select
                  className="w100"
                  value={this.props.selectedCuisineId}
                  onChange={this.props.selectCuisine}
              >
                {modifiedCuisineList.length && modifiedCuisineList.map((cuisine, i) => {
                    return (
                        <option
                            key={i}
                            value={cuisine.id}
                        >
                            {cuisine.value}
                        </option>
                    )
                })}
              </select>
            </span>
        );
    }

    render() {

        console.log('props searc bar', this.props);
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
                          {this.renderAreaDropDown()}
                        </p>
                    </div>

                    <div className="separator"><span className="separator__text">OR</span></div>
                    <div className="field">
                        <label className="label">Cuisine</label>
                        <p className="control">
                        {this.renderCuisineDropdown()}
                        </p>
                    </div>

                    <div className="block">
                        <div
                            className="button is-primary block search-bar__btn"
                            onClick={this.props.fetchResults}
                        >Search</div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
