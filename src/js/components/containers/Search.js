import React, {Component} from 'react';
import {SearchBar, SearchResults} from '../modules/search';
import {SearchActions} from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Search extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <SearchBar />
                <SearchResults />
            </div>
        );
    }
}


export default connect(
    (state, props) => {
        return {
            user: {
                abd: 'dddd'
            }
        };
    },
    (dispatch => ({
        actions: bindActionCreators(SearchActions, dispatch)
    }))
)(Search);
