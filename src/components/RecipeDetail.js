import React, { Component } from 'react';
import icons from '../images/icons.svg';
import RecipeItem from './RecipeItem';
import uuid from 'node-uuid';
import Loader from "./Loader";

export default class RecipeDetail extends Component {

    render(){
        const recipe = this.props.recipe;
        if(Object.keys(recipe).length === 0){
            return ( <Loader /> );
        }

        const ingredients = recipe.ingredients;
        const renderIngredients = ingredients.map(ingredient => (
            <RecipeItem
                key={`ingredient-${uuid.v4()}`}
                count={ingredient.count}
                unit={ingredient.unit}
                ingredient={ingredient.ingredient}
            />
        ));

        return (
            <div className="recipe">
                <figure className="recipe__fig">
                    <img src={recipe.img} alt={recipe.title} className="recipe__img" />
                    <h1 className="recipe__title">
                        <span>{recipe.title}</span>
                    </h1>
                </figure>

                <div className="recipe__details">
                    <div className="recipe__info">
                        <svg className="recipe__info-icon">
                            <use href={`${icons}#icon-stopwatch`}></use>
                        </svg>
                        <span className="recipe__info-data recipe__info-data--minutes">{recipe.time}</span>
                        <span className="recipe__info-text"> minutes</span>
                    </div>
                    <div className="recipe__info">
                        <svg className="recipe__info-icon">
                            <use href={`${icons}#icon-man`}></use>
                        </svg>
                        <span className="recipe__info-data recipe__info-data--people">{recipe.servings}</span>
                        <span className="recipe__info-text"> servings</span>

                        <div className="recipe__info-buttons">
                            <button className="btn-tiny btn-decrease"
                                    onClick={this.handleDecreaseServingsClick}>
                                <svg>
                                    <use href={`${icons}#icon-circle-with-minus`}></use>
                                </svg>
                            </button>
                            <button className="btn-tiny btn-increase"
                                    onClick={this.handleIncreaseServingsClick}>
                                <svg>
                                    <use href={`${icons}#icon-circle-with-plus`}></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <button className="recipe__love">
                        <svg className="header__likes">
                            <use href={`${icons}#icon-heart-outlined`}></use>
                            {/*<use href={`${icons}#icon-icon-heart${isLiked ? '' : '-outlined'}`}></use>*/}
                        </svg>
                    </button>
                </div>

                <div className="recipe__ingredients">
                    <ul className="recipe__ingredient-list">
                        {renderIngredients}
                    </ul>

                    <button className="btn-small recipe__btn recipe__btn--add">
                        <svg className="search__icon">
                            <use href={`${icons}#icon-shopping-cart`}></use>
                        </svg>
                        <span>Add to shopping list</span>
                    </button>
                </div>

                <div className="recipe__directions">
                    <h2 className="heading-2">How to cook it</h2>
                    <p className="recipe__directions-text">
                        This recipe was carefully designed and tested by
                        <span className="recipe__by">{recipe.author}</span>. Please check out directions at their
                        website.
                    </p>
                    <a className="btn-small recipe__btn" href={recipe.url} target="_blank">
                        <span>Directions</span>
                        <svg className="search__icon">
                            <use href={`${icons}#icon-triangle-right`}></use>
                        </svg>

                    </a>
                </div>
            </div>
        );

    }

    handleDecreaseServingsClick = () => { this.props.onDecreaseServingsClick() };
    handleIncreaseServingsClick = () => { this.props.onIncreaseServingsClick(); }
};


// Handling recipe button clicks
// elements.recipe.addEventListener('click', e => {
//     } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
//         // Add ingredients to shopping list
//         controlList();
//     } else if (e.target.matches('.recipe__love, .recipe__love *')) {
//         // Like controller
//         controlLike();
//     }
// });