import React, { Component } from 'react';
import icons from '../images/icons.svg';

export default class Loader extends Component {
    render () {
        return (
            <div className="loader">
                <svg>
                    <use href={`${icons}#icon-cw`}></use>
                </svg>
            </div>
        );
    }
}