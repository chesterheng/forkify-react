import React, { Component } from 'react';
import icons from '../images/icons.svg';

export default class ShoppingItem extends Component {
    render() {
        const {id, count, unit, ingredient } = this.props;
        return (
            <li className="shopping__item" data-itemid={id}>
                <div className="shopping__count">
                    <input type="number" value={count} step={count} className="shopping__count-value"/>
                        <p>{unit}</p>
                </div>
                <p className="shopping__description">{ingredient}</p>
                <button className="shopping__delete btn-tiny">
                    <svg>
                        <use href={`${icons}#icon-circle-with-cross`}></use>
                    </svg>
                </button>
            </li>
        );
    }
}