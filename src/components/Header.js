import React, { Component } from 'react';
import logo from '../images/logo.png';
import icons from '../images/icons.svg';
import * as Api from '../api/Api';

export default class Header extends Component {

    handleSearchFormSubmit = (event) => {
        event.preventDefault();
        this.controlSearch();
    };

    controlSearch = async () => {
        // 1) Get query from view
        const query = this.refs.search__field.value;

        if (query) {
            // 2) New search object and add to state
            this.props.onQueryChange(query);

            // 3) Prepare UI for results
            this.refs.search__field.value = '';

            try {
                // 4) Search for recipes
                const results = await Api.getResults(query);

                // pass result to parent component
                // 5) Render results on UI
                this.props.onResultChange(results);

            } catch (error) {
                alert(`error in controlSearch in Header: ${error}`);
            }
        }
    };

    render() {
        return (
            <header className="header">
                <img src={logo} alt="Logo" className="header__logo" />
                <form className="search" onSubmit={this.handleSearchFormSubmit}>
                    <input type="text" ref="search__field" className="search__field" placeholder="Search over 1,000,000 recipes..." />
                        <button className="btn search__btn">
                            <svg className="search__icon">
                                <use href={`${icons}#icon-magnifying-glass`}></use>
                            </svg>
                            <span>Search</span>
                        </button>
                </form>
                <div className="likes">
                    <div className="likes__field">
                        <svg className="likes__icon">
                            <use href={`${icons}#icon-heart`}></use>
                        </svg>
                    </div>
                    <div className="likes__panel">
                        <ul className="likes__list">
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}