import React, { Component } from 'react';

export default class ResultLink extends Component {
    /*
    // 'Pasta with tomato and spinach'
    acc: 0 / acc + cur.length = 5 / newTitle = ['Pasta']
    acc: 5 / acc + cur.length = 9 / newTitle = ['Pasta', 'with']
    acc: 9 / acc + cur.length = 15 / newTitle = ['Pasta', 'with', 'tomato']
    acc: 15 / acc + cur.length = 18 / newTitle = ['Pasta', 'with', 'tomato']
    acc: 18 / acc + cur.length = 24 / newTitle = ['Pasta', 'with', 'tomato']
    */
    limitRecipeTitle = (title, limit = 17) => {
        const newTitle = [];
        if (title.length > limit) {
            title.split(' ').reduce((acc, cur) => {
                if (acc + cur.length <= limit) {
                    newTitle.push(cur);
                }
                return acc + cur.length;
            }, 0);

            // return the result
            return `${newTitle.join(' ')} ...`;
        }
        return title;
    }

    render() {
        return (
            <li>
                <a className="results__link" href={`#${this.props.recipe_id}`}>
                    <figure className="results__fig">
                        <img src={this.props.image_url} alt={this.props.title} />
                    </figure>
                    <div className="results__data">
                        <h4 className="results__name">{this.limitRecipeTitle(this.props.title)}</h4>
                        <p className="results__author">{this.props.publisher}</p>
                    </div>
                </a>
            </li>
        );
    }
}