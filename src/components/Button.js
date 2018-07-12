import React, { Component } from 'react';
import icons from '../images/icons.svg';

export default class Button extends Component {

    handleGotoPageClick = (event) => {
        const goToPage = parseInt(event.currentTarget.dataset.goto, 10);
        this.props.onGotoPageClick(goToPage);
    };

    render() {
        const gotoPage = this.props.gotoPage;
        return (
            <button className={`btn-inline results__btn--${this.props.type}`}
                    data-goto={gotoPage}
                    onClick={this.handleGotoPageClick}>
                <span>Page {gotoPage}</span>
                <svg className="search__icon">
                    <use href={`${icons}#icon-triangle-${this.props.type === 'prev' ? 'left' : 'right'}`}></use>
                </svg>
            </button>
        );
    }
}