import React, {Component} from 'react';

export default class CusineList extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const cuisineList = [
            {
                id: 1,
                name: 'Biryani'
            },
            {
                id: 1,
                name: 'Biryani'
            },
            {
                id: 1,
                name: 'Biryani'
            },
            {
                id: 1,
                name: 'Biryani'
            },
            {
                id: 1,
                name: 'Biryani'
            },
            {
                id: 1,
                name: 'Biryani'
            },
            {
                id: 1,
                name: 'Biryani'
            }
        ]


        return (
            <div className="box cusine-list">
                <div className="cusine-list__logo">
                    <img
                        className="cusine-list__logo__img"
                        src="https://www.swiggy.com/images/favicons/mstile-150x150.png"
                    />
                    <div>... Fetching Cuisines ...</div>
                </div>
                <ul className="cusine-items">
                    {
                        cuisineList && cuisineList.map((cusine, index) => {
                            return (
                                <li className="cusine-items__item">
                                    {cusine.name}

                                    <span></span>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        );
    }
}
