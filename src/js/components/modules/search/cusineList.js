import React, {Component} from 'react';

export default class CusineList extends Component {
    constructor(props) {
        super(props);
    }

    renderFetchingText() {
        let fetchingText = null;

        if (this.props.resultApiStatus.inProgress) {
            fetchingText = (<div>... Fetching Cuisines ...</div>);
        }

        return fetchingText;
    }

    render() {

        let cuisineList = [];

        if (!this.props.resultApiStatus.inProgress && this.props.areaWiseDetails && this.props.areaWiseDetails.cuisines && this.props.areaWiseDetails.cuisines.length) {
            cuisineList = this.props.areaWiseDetails.cuisines.sort(function (a, b) {
                    const x = a.score;
                    const y = b.score;

                    if (x === 0 && y === 0)
                        return 1 / y - 1 / x  || 0;
                    else return y - x;
                });
        }


        return (
            <div className="box cusine-list">
                <div className="cusine-list__logo">
                    <img
                        className="cusine-list__logo__img"
                        src="https://www.swiggy.com/images/favicons/mstile-150x150.png"
                    />
                    {this.renderFetchingText()}

                </div>
                <ul className="cusine-items">
                    {
                        cuisineList.map((cusine, index) => {
                            return (
                                <li className="cusine-items__item">
                                    <span className="item-name">{cusine.name}</span>
                                    <span className="item-score">{Math.round(cusine.score * 100) / 100}</span>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        );
    }
}
