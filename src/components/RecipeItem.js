import React, { Component } from 'react';
import icons from '../images/icons.svg';
import * as math from 'mathjs';

export default class ReceipItem extends Component {

    render() {
        const {count, unit, ingredient } = this.props;

        return (
             <li className="recipe__item">
                <svg className="recipe__icon">
                    <use href={`${icons}#icon-check`}></use>
                </svg>
                <div className="recipe__count">{this.formatCount(count)}</div>
                <div className="recipe__ingredient">
                    <span className="recipe__unit">{unit}</span>&nbsp;{ingredient}
                </div>
            </li>
        );
    }

    formatCount = count => {
        if (count) {
            // count = 2.5 --> 5/2 --> 2 1/2
            // count = 0.5 --> 1/2
            const newCount = Math.round(count * 10000) / 10000;
            const [int, dec] = newCount.toString().split('.').map(el => parseInt(el, 10));

            if (!dec) return newCount;

            if (int === 0) {
                const fr = math.fraction(newCount);
                return `${fr.n}/${fr.d}`;
            } else {
                const fr = math.fraction(newCount - int);
                return `${int} ${fr.n}/${fr.d}`;
            }
        }
        return '?';
    };
}

